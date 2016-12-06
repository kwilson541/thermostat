const DEFAULT_TEMP = 20;

function Thermostat(){
  this.temperature = DEFAULT_TEMP;
}

Thermostat.prototype.increaseTemp = function(temp) {
  this.temperature += temp;
}

Thermostat.prototype.decreaseTemp = function(temp) {
  this.temperature -= temp;
}
