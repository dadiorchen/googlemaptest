const chai = require("chai");
const mapTools = require("./mapTools");
/*
 * To calculate the initial bounds for some points/clusters, 
 * expressing(return value) by: 
 * {
 *    center: {
 *      lat: number,
 *      lng: number,
 *    },
 *    zoomLevel: number,
 * }
 *
 *
 */
function getInitialBounds(locations, width, height){
  chai.expect(locations).a("array").lengthOf.gte(1);
  locations.every(location => {
    chai.expect(location).property("lat").a("number");
    chai.expect(location).property("lng").a("number");
  });
  chai.expect(width).gt(0);
  chai.expect(height).gt(0);

  // If there is only a single cluster, create a bounding box centered on that cluster with a 1 degree latitude height and 1 degree longitude width
  if(locations.length === 1){
    const location = locations[0];
    const cornerWestNorth = 
      mapTools.go(
        "north",
        mapTools.go("west", location, 0.5),
        0.5
      );
    locations.push(cornerWestNorth);
    const cornerWestSouth = 
      mapTools.go(
        "south",
        mapTools.go("west", location, 0.5),
        0.5
      );
    locations.push(cornerWestSouth);
    const cornerEastNorth = 
      mapTools.go(
        "north",
        mapTools.go("east", location, 0.5),
        0.5
      );
    locations.push(cornerEastNorth);
    const cornerEastSouth = 
      mapTools.go(
        "south",
        mapTools.go("east", location, 0.5),
        0.5
      );
    locations.push(cornerEastSouth);
  }

  const bounds = new google.maps.LatLngBounds();
  console.log("bounds:", bounds);
  for(let location of locations){
    bounds.extend(location);
  }
  console.log("bounds:", bounds);
  const center = {
    lat: bounds.getCenter().lat(),
    lng: bounds.getCenter().lng(),
  }
  //cal zoom
  let zoom;
  var GLOBE_WIDTH = 256; // a constant in Google's map projection
  {
    const west = bounds.getSouthWest().lng();
    const east = bounds.getNorthEast().lng();
    const angle = mapTools.getAngleLng(east, west);
    zoom = Math.round(Math.log(width * 360 / angle / GLOBE_WIDTH) / Math.LN2);
    console.log("zoom1:", zoom);
  }
  let zoom2;
  {
    const south = bounds.getSouthWest().lat();
    const north = bounds.getNorthEast().lat();
    const angle = mapTools.getAngleLat(north, south);
    console.log("angle:", angle);
    zoom2 = Math.round(Math.log(height * 360 / angle / GLOBE_WIDTH) / Math.LN2);
    console.log("zoom2:", zoom2);
  }
  console.log("height:", height, "width:", width);
  const zoomFinal = Math.min(zoom, zoom2) - 1/* to give some padding*/;
  console.log("zoom final:", zoomFinal);
  const result =  {
    center,
    zoomLevel: zoomFinal,
  };
  console.log("result:", result);
  return result;
}

module.exports = getInitialBounds;
