import "core-js/stable";
import "regenerator-runtime/runtime";
import "cesiumSource/Widgets/widgets.css";
import "./main.css";
const Cesium = require("cesiumSource/Cesium");
// Import @types/cesium to use along with CesiumJS
import { Viewer, Ion, IonResource, createWorldTerrain } from "cesium";
import TerrainProvider, { MartiniTerrainProvider, DefaultHeightmapResource, MapboxTerrainResource, CompositeHeightmapResource } from "../../dist";

// const terrainResource = new DefaultHeightmapResource({
//   url: "http://localhost:8080/public/terrain/{z}/{x}/{reverseY}.png",
//   skipOddLevels: false,
//   maxZoom: 18,
//   decodeRgb: (r, g, b, a) => a < 255 ? 0 : (r * 256 * 256) * 0.001 + (g * 256.0) * 0.001 + b * 0.001 - 11200.0,
// });

// @ts-ignore
const terrainResource = new CompositeHeightmapResource({
  urls: [
    "http://localhost:8080/public/terrain1/{z}/{x}/{reverseY}.png",
    "http://localhost:8080/public/terrain2/{z}/{x}/{reverseY}.png",
    "http://localhost:8080/public/terrain3/{z}/{x}/{reverseY}.png",
    "http://localhost:8080/public/terrain4/{z}/{x}/{reverseY}.png",
  ],
  skipOddLevels: false,
  maxZoom: 18,
  decodeRgb: (r, g, b, a) => a < 255 ? 0 : (r * 256 * 256) * 0.001 + (g * 256.0) * 0.001 + b * 0.001 - 11200.0,
});

const terrainProvider = new MartiniTerrainProvider({
  resource: terrainResource,
  requestVertexNormals: false,
  requestWaterMask: false,
});


// const terrainResource = new MapboxTerrainResource({
//   accessToken: process.env.MAPBOX_API_TOKEN,
//   skipOddLevels: false,
//   highResolution: false,
// });

// const terrainProvider = new TerrainProvider({
//   resource: terrainResource,
//   requestVertexNormals: false,
//   requestWaterMask: false,
// });

let satellite = new Cesium.MapboxImageryProvider({
  mapId: "mapbox.satellite",
  maximumLevel: 19,
  accessToken: process.env.MAPBOX_API_TOKEN,
});

var opts = {
  terrainProvider, //: createWorldTerrain(),
  // imageryProvider: Cesium.createWorldImagery({
  //   style: Cesium.IonWorldImageryStyle.AERIAL,
  // }),
  // @ts-ignore
  skyBox: false,
  baseLayerPicker: false,
  geocoder: false,
  skyAtmosphere: false,
  animation: false,
  timeline: false,
  // Makes cesium not render high fps all the time
  requestRenderMode: true,
  // Use full scene buffer (respecting pixel ratio) if this is false
  useBrowserRecommendedResolution: false,
  // We have a bug in the tile bounding box calculation somewhere.
  terrainExaggeration: 1.0,
  imageryProvider: satellite,
};

const domID = "cesium-container";
const g = document.createElement("div");
g.id = domID;
document.body.appendChild(g);

var clat = -21.133786;
var clon = 14.5481193;
var zoom = 3000;

clat = -20.5823678;
clon = 117.1834165;
zoom = 1000;

const rect = Cesium.Rectangle.fromDegrees(
  clon - 0.01,
  clat - 0.01,
  clon + 0.01,
  clat + 0.01
);
//Cesium.Camera.DEFAULT_VIEW_RECTANGLE = rect;
//Cesium.Camera.DEFAULT_VIEW_FACTOR = 0.005;
//Cesium.Camera.DEFAULT_VIEW_OFFSET = new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-10), 1)

var viewer = new Cesium.Viewer(domID, opts);
// Quadtree props: don't preload ancestors

//viewer.scene.globe.baseColor = Cesium.Color.AQUAMARINE
// @ts-ignore
//viewer.scene.globe._surface._tileProvider._debug.wireframe = true
// @ts-ignore
viewer.extend(Cesium.viewerCesiumInspectorMixin);
viewer.scene.debugShowFramesPerSecond = true;

var extent = Cesium.Cartesian3.fromDegrees(clon, clat - 0.015, zoom);
viewer.camera.setView({
  destination: extent,
  orientation: {
    heading: Cesium.Math.toRadians(0), // east, default value is 0.0 (north)
    pitch: Cesium.Math.toRadians(-30), // default value (looking down)
    roll: 0.0, // default value
  },
});

//viewer.resolutionScale = 2
//viewer.scene.globe.enableLighting = true
//viewer.canvas.style.imageRendering = false
