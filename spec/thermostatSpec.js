'use strict'
describe("Thermostat", function(){

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should have a default temperature of 20", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should be able to increase the temperature by 5", function(){
    thermostat.increaseTemp(5);
    expect(thermostat.temperature).toEqual(25);
  });

  it("should be able to decrease the temperature by 5", function(){
    thermostat.decreaseTemp(5);
    expect(thermostat.temperature).toEqual(15);
  });

  it("should throw error if attempt to increase temperature above maximum", function(){
    expect( function(){ thermostat.increaseTemp(13); } ).toThrow(new Error("Cannot raise temperature that high"));
  });

  it("should throw error if attempt to decrease temperature below minimum", function(){
    expect( function(){ thermostat.decreaseTemp(11); } ).toThrow(new Error("Cannot lower temperature that much"))
  });

});
