const DEFAULT_TEMP = 20;
var maximumTemp = 32;
var minimumTemp = 10;

function Thermostat(){
  this.temperature = DEFAULT_TEMP;
}

Thermostat.prototype.increaseTemp = function(temp) {
  if (this.temperature + temp > maximumTemp) {
  	throw new Error("Cannot raise temperature that high");
  }
  else {
  	this.temperature += temp;
  }
}

Thermostat.prototype.decreaseTemp = function(temp) {
  if (this.temperature - temp < minimumTemp) {
  	throw new Error("Cannot lower temperature that much");
  }
	else {
		this.temperature -= temp;
	}
}
