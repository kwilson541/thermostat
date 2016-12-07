function Thermostat() {
	this.temperature = defaultTemperature;
	this.powerSavingMode = true;
	this.maximumTemperature = 25;
}

Thermostat.prototype.increaseTemperature = function() {
  if (this.temperature < this.maximumTemperature) {
    this.temperature += 1
  }
}

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature > minimumTemperature) {
    this.temperature -= 1
  }
}

Thermostat.prototype.powerSavingModeOff = function() {
	this.powerSavingMode = false;
	this.maximumTemperature = 32;
}

Thermostat.prototype.powerSavingModeOn = function() {
	this.powerSavingMode = true;
	this.maximumTemperature = 25;
}

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20;
}

Thermostat.prototype.currentEnergyUsage = function() {
  return "low-usage";
}


const defaultTemperature = 20;
const minimumTemperature = 10;
