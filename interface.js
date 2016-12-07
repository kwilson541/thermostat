$ ( document ).ready(function() {
  
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  if (thermostat.powerSavingMode === true) {
  	$('#power-saving-mode').text("ON");
  }
  else {
  	$('#power-saving-mode').text("OFF");
  }

  $('#energy-usage').text(thermostat.currentEnergyUsage());

  

});
