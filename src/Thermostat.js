function Thermostat() {
  this.temperature = defaultTemperature;
}

Thermostat.prototype.increaseTemperature = function() {
  if (this.temperature < maximumTemperature) {
    this.temperature += 1
  }
}

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature > minimumTemperature) {
    this.temperature -= 1
  }
}

const defaultTemperature = 20;
const minimumTemperature = 10;
var maximumTemperature = 32;
