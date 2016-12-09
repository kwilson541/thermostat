$( document ).ready(function() {
  var thermostat = new Thermostat();

  retrieveData();

  $("#temperature-up").click(function( event ) {
    thermostat.up()
    refresh();
  });

  $("#temperature-down").click(function( event ) {
    thermostat.down()
    refresh();
  });

  $("#temperature-reset").click(function( event ) {
    thermostat.resetTemperature()
    refresh();
  });

  $("#powersavingmode").click(function( event ) {
    thermostat.switchPowerSavingMode();
    refresh();
  });

  $("#page").fadeIn(3000);

  function psmStatus() {
    if (thermostat.isInPowerSavingMode === true) {
      return "On";
    } else {
      return "Off";
    }
  }

  $("#select-city").submit(function(event) {
    event.preventDefault();
    var city = $("#current-city").val();
      displayWeather(city);
  });

  function refresh() {
    $("#temperature").text(thermostat.temperature);
    $("#energy-usage").text(thermostat.currentEnergyUsage());
    $("#energy-usage").attr('class', thermostat.currentEnergyUsage());
    $("#psm-status").text(psmStatus());
    $("#psm-status").attr('class', psmStatus());
  }

  function displayWeather(city) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city
    var token = "&appid=62533840e9dbcd6fa7361f8cee5c5ffa"
    var units = "&units=metric"
    $.getJSON(url + token + units, function(data) {
      $("#current-temperature-outside").text(data.main.temp + "°C");
      $("#description").text(data.weather[0].description);
      $("#set-city").text(city);
    })
  }

  function retrieveData() {
    $.getJSON("http://localhost:9292/values", function(data) {
      thermostat.changeTemperature(data.temperature);
      thermostat.changePowerSavingMode(data.psm);
      displayWeather(data.current_city);
      refresh();
    })
  }

});