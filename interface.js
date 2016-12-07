$ ( document ).ready(function() {

  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);
  $('#power-saving-mode').text("ON")
  $('#energy-usage').text(thermostat.currentEnergyUsage());

  $('#up').click(function() {
  	thermostat.increaseTemperature();
  	updateTemperature();
    updateEnergyUsage();

  });

  $('#down').click(function() {
  	thermostat.decreaseTemperature();
  	updateTemperature();
    updateEnergyUsage();
  });

  $('#reset').click(function() {
  	thermostat.resetTemperature();
  	updateTemperature();
    updateEnergyUsage();
  });

  $('#psm').click(function() {
  	thermostat.togglePowerSavingMode();
	  if (thermostat.powerSavingMode === true) {
	  	$('#power-saving-mode').text("ON");
	  }
	  else {
	  	$('#power-saving-mode').text("OFF");
	  }
    updateTemperature();
  });

  function updateTemperature() {
  	$('#temperature').text(thermostat.temperature);
  }

  function updateEnergyUsage() {
    $('#energy-usage').text(thermostat.currentEnergyUsage());
  }
});
