function Thermostat() {
  this.temperature = defaultTemperature;
}

Thermostat.prototype.increaseTemperature = function() {
	this.temperature += 1
}

Thermostat.prototype.decreaseTemperature = function() {
	this.temperature -= 1
}

const defaultTemperature = 20;
