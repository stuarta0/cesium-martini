import "core-js/stable";
import "regenerator-runtime/runtime";
import "cesiumSource/Widgets/widgets.css";
import "./main.css";
const Cesium = require("cesiumSource/Cesium");
// Import @types/cesium to use along with CesiumJS
import { Viewer, Ion, IonResource, createWorldTerrain } from "cesium";
import { MartiniTerrainProvider, DefaultHeightmapResource, WorkerFarmTerrainDecoder } from "../../dist";
import TerrariumWorker from "./mapzen.worker.ts";

// Mapzen API discontinued, alternate source required
const terrainResource = new DefaultHeightmapResource({
  //url: "https://tile.mapzen.com/mapzen/terrain/v1/terrarium/{z}/{x}/{y}.png?api_key=XXX",
  url: "http://localhost:8080/public/terrain/{z}/{x}/{reverseY}.png",
  skipOddLevels: false,
  maxZoom: 18,
});

// Terrarium format utilises a different encoding scheme to Mapbox Terrain-RGB
// @ts-ignore
const terrainDecoder = new WorkerFarmTerrainDecoder({
  worker: new TerrariumWorker()
});

// Construct terrain provider with Mapzen datasource and custom RGB decoding
// @ts-ignore
const terrainProvider = new MartiniTerrainProvider({
  resource: terrainResource,
  decoder: terrainDecoder,
  requestVertexNormals: false,
  requestWaterMask: false,
});


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
