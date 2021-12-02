
/**
 * Workflow:
 * 
 * getTileDataAvailable(coords): checks max zoom and returns bool
 * getTilePixels(coords): build tile URL, load image, get pixels.
 *   - buildTileURL(coords): Resource.getDerivedResource(...coords, ...)
 *   - loadImage(url): Promise resolve on dom Image src load event, returns dom Image obj
 *   - getPixels(img): create canvas element, draw image, getImageData
 * 
 * 
 * Composite workflow:
 * 
 * Assumptions:
 * - tiles have alpha transparency in areas of nodata, so can be stacked
 *   (assuming canvas drawImage does this as expected)
 * - semi-transparency is not supported, since alpha-blended RGB-encoded pixels are invalid
 * - all datasources will have the same zoom range
 * - all datasources are encoded with the same RGB encoding scheme
 * 
 * Option 1: resource that maintains list of URL templates
 * - urls in order of oldest (0) to newest (N)
 * - getTileDataAvailable shouldn't change
 * - getTilePixels becomes a promise chain:
 *   - Promise.allSettled(urls.map(templateUrl => {
 *        url = buildTileURL(coords, templateUrl)
 *        return loadImage(url)
 *     }).then(imgs => {
 *        return getPixels(imgs.filter(img => img.status === 'fullfilled'))
 *     })
 *  - getPixels(imgs[]) {
 *      // ... logic as usual except drawImage becomes:
 *      imgs.forEach(img => context.drawImage(img, 0, 0, this.tileSize, this.tileSize));
 *      // etc...
 *    }
 * 
 * - new logic: add/remove urls that somehow triggers an event for the terrain
 *   provider to respond to and refresh itself in the map
 */

import Resource from "cesium/Source/Core/Resource";
import DefaultHeightmapResource, { DefaultHeightmapResourceOpts, loadImage } from "./heightmap-resource";
import { TileCoordinates } from "../terrain-provider";

export interface CompositeHeightmapResourceOpts extends Omit<DefaultHeightmapResourceOpts, "url"> {
    urls: string[];
}

export class CompositeHeightmapResource extends DefaultHeightmapResource {
    resources: Resource[] = null;

    constructor(opts: CompositeHeightmapResourceOpts) {
        super(opts);
        this.resources = Array.from(opts.urls.map(url => Resource.createIfNeeded(url)));
    }

  getTilePixels = async (coords: TileCoordinates) => {
    return Promise.allSettled(this.resources.map(resource => {
      const url = this.buildTileURL(coords, resource);
      return loadImage(url);
    })).then(images => {
      const valid = Array.from(images.filter(image => image.status === 'fulfilled'));
      if (valid.length === 0) throw new Error(`No valid tiles out of ${this.resources.length} resources at ${coords.x},${coords.y},${coords.z}`);
      console.warn(`${valid.length} of ${this.resources.length} valid image sources for ${coords.x},${coords.y},${coords.z}`);
      return this.getPixels(valid.map<HTMLImageElement>(image => (image as PromiseFulfilledResult<HTMLImageElement>).value));
    });
  }
}