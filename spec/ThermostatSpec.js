describe("Thermostat",function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should have a default temperature of 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should be able to increase the temperature by 1 degree", function() {
  	thermostat.increaseTemperature();
  	expect(thermostat.temperature).toEqual(21);
  });

  it("should be able to decrease the temperature by 1 degree", function() {
  	thermostat.decreaseTemperature();
  	expect(thermostat.temperature).toEqual(19);
  });

  it("should have a minimum temperature of 10 degrees", function() {
    for(count = 0; count < 11; count++) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.temperature).toEqual(10)
  })

  it("should have a maximum temperature of 32 degrees", function() {
    for(count = 0; count < 13; count++) {
      thermostat.increaseTemperature();
    }
    expect(thermostat.temperature).toEqual(32)
  });

});
