/*
 * Some tool for map calculation
 */
const chai = require("chai");

exports.go = function(direction, location, degree){
  chai.expect(direction).oneOf(["east", "west", "north", "south"]);
  chai.expect(location).property("lat").a("number");
  chai.expect(location).property("lng").a("number");
  chai.expect(degree).a("number");
  const result = {lat: location.lat, lng: location.lng};
  if(direction === "east"){
    result.lng += degree;
  }else if(direction === "west"){
    result.lng -= degree;
  }else if(direction === "north"){
    result.lat += degree;
  }else if(direction === "south"){
    result.lat -= degree;
  }
  //correct
  if(direction === "east" || direction === "west"){
    if(result.lng > 180){
      result.lng = result.lng % 180 - 180;
    }else if(result.lng < -180){
      result.lng = result.lng % 180 + 180;
    }
  }else if(direction === "north" || direction === "south"){
    if(result.lat > 90){
      result.lat = 90 - result.lat % 90;
    }else if(result.lat < -90){
      result.lat = -result.lat % 90 - 90;
    }
  }
  return result;
};

exports.getAngleLng = function(east, west){
  let angle = east - west;
  if (angle < 0) {
    angle += 360;
  }
  return angle;
};

exports.getAngleLat = function(north, south){
  let angle = north - south;
  console.log("angle:", angle);
  angle = Math.abs(angle);
  return angle;
};
