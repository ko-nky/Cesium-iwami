Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOWFmYmEwZi1jN2U4LTQ1MDQtYjdjYi0xMjBlOWQwNmJkMWEiLCJpZCI6MTAzMzQwLCJpYXQiOjE2NTk0MzAzNjF9.b3DTpz5nZN9VLt2ZEanwyxWWILG_Ns9vuwAPo3b_u9E';
const viewer = new Cesium.Viewer('cesiumContainer', {
  terrainProvider: Cesium.createWorldTerrain(),
  baseLayerPicker: false,
});
const scene = viewer.scene;
const primitives = scene.primitives;

const baseTileset = new Cesium.Cesium3DTileset({
  url: Cesium.IonResource.fromAssetId(1363490)
});
const colTileset = new Cesium.Cesium3DTileset({
  url: Cesium.IonResource.fromAssetId(1363491)
});
primitives.add(baseTileset);
primitives.add(colTileset);
viewer.zoomTo(baseTileset, new Cesium.HeadingPitchRange(0, -0.5, 0));

Sandcastle.addToggleButton("Show hatmap", true, function (
  checked
) {
	picking = checked;
    if (picking){
      baseTileset.show = checked;
      colTileset.show = checked;
    } else {
      baseTileset.show = !checked;
      colTileset.show = checked;
   }
});

//function addBillboard() {
//  Sandcastle.declare(addBillboard);

//  viewer.entities.add({
//    position: Cesium.Cartesian3.fromDegrees(140.274380, 39.664302),
//    billboard: {
//      image: "./col_labal.png",
//    },
//  });
//}

//Sandcastle.addToolbarMenu([
//  {
//    text: "Add billboard",
//    onselect: function () {
//      addBillboard();
//      Sandcastle.highlight(addBillboard);
//    },
//  },
//]);

//var billboards = primitives.add(new Cesium.BillboardCollection());

//billboards.add({
//    image : "./col_label.png",
//    position : Cesium.Cartesian3.fromDegrees(140.274380, 39.664302)
//});

var entity = viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(140.274380, 39.664302),
      billboard: {
        image: './col_label.png',
      }
});



var show = true;
Sandcastle.addToolbarButton('toggle color label', function() {
    show = !show;
    entity.get.show = show;
//    for (var i = 0; i < billboards.length; ++i) {
//        billboards.get(i).show = show;
//    }
});


//  viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0, -0.5, 0));
console.log(tileset.dynamicScreenSpaceErrorDensity + '#n' + tileset.dynamicScreenSpaceErrorFactor);


