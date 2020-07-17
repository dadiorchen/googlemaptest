console.log("index.js!");
const getInitialBounds = require("./model");

//{{{
var data = `[{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9186866666667,27.240195]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9180466666667,27.2406516666667]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9181116666667,27.2405783333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9181516666667,27.240575]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9181766666667,27.24054]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.91806,27.2406266666667]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9187366666667,27.2401033333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9188,27.2400433333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9188,27.240025]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9187916666667,27.240025]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9187,27.24021]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9187,27.2401916666667]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.91871,27.24013]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9187283333333,27.2401233333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9183266666667,27.2404633333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9183816666667,27.2404633333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9183916666667,27.2403733333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9184433333333,27.240375]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.91844,27.2403266666667]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9184883333333,27.2402833333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9185266666667,27.2402833333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9185683333333,27.24027]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9185666666667,27.2402733333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9186566666667,27.240235]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9222266666667,27.2417916666667]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9220433333333,27.2419966666667]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9221083333333,27.2419766666667]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9221466666667,27.2420833333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9221533333333,27.2421383333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9221266666667,27.2421616666667]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9220583333333,27.24219]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9066366666667,27.219385]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.906655,27.2193333333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.906655,27.2193183333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.906735,27.2193616666667]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9063366666667,27.2194266666667]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.90632,27.2193916666667]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9066433333333,27.2195283333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9067433333333,27.2194416666667]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.90673,27.2194416666667]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9067566666667,27.2193483333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9067433333333,27.219395]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.906695,27.2194433333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.90667,27.2194183333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9064533333333,27.2192933333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9064866666667,27.2192916666667]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9067533333333,27.21941]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.90663,27.2194116666667]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9066433333333,27.2193766666667]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9066616666667,27.2194016666667]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.906695,27.2194133333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.906715,27.2194266666667]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9063266666667,27.2193116666667]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.906305,27.2193]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9063216666667,27.2192283333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9063416666667,27.2192866666667]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.90639,27.2193]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9064166666667,27.219275]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.90645,27.219305]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9063383333333,27.2194233333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.90634,27.2193566666667]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9063466666667,27.2193533333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9066366666667,27.219365]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9066116666667,27.2195383333333]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9067333333333,27.2194366666667]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9182216666667,27.240535]},"count":1,"centrioid":1},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.9187016666667,27.24008]},"count":1,"centrioid":1}]`;
//}}}

const data2 =
  '[{"type":"cluster","centroid":{"type":"Point","coordinates":[75.919265959596,27.2406763131313]},"count":33},{"type":"cluster","centroid":{"type":"Point","coordinates":[75.906556372549,27.2193746568627]},"count":34}]';

function getClusterRadius(zoom) {
  switch (zoom) {
    case 1:
      return 10;
    case 2:
      return 8;
    case 3:
      return 6;
    case 4:
      return 4;
    case 5:
      return 0.8;
    case 6:
      return 0.75;
    case 7:
      return 0.3;
    case 8:
      return 0.099;
    case 9:
      return 0.095;
    case 10:
      return 0.05;
    case 11:
      return 0.03;
    case 12:
      return 0.02;
    case 13:
      return 0.008;
    case 14:
      return 0.005;
    case 15:
      return 0.004;
    case 16:
      return 0.003;
    case 17:
    case 18:
    case 19:
      return 0.0;
    default:
      return 0;
  }
}


window.data = data;
window.data2 = data2;
window.getClusterRadius = getClusterRadius;
window.getInitialBounds = getInitialBounds;
//module.exports = {
//  data,
//};
//
//
//
