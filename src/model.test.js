const getInitialBounds = require("./model");


describe("getInitialBounds", () => {

  beforeAll(() => {
  });


  it("getInitialBounds(0,0)", () => {
    global.google = {
      maps: {
        LatLngBounds: jest.fn().mockImplementation(() => ({
          extend: jest.fn(),
          getCenter: () => ({
            lat: () => 0,
            lng: () => 0,
          }),
          getSouthWest: () => ({
            lat: () => 0,
            lng: () => 0,
          }),
          getNorthEast: () => ({
            lat: () => 0,
            lng: () => 0,
          }),
        })),
      },
    };
    const result = getInitialBounds([{lat:0, lng:0}], 500, 500);
    expect(result).toMatchObject({
      center: {
        lat: 0,
        lng: 0,
      },
      zoomLevel: expect.anything(),
    });
  });
});

