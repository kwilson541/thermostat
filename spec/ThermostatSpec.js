describe("Thermostat",function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

	it("should have a default temperature of 20 degrees", function() {
		expect(thermostat.temperature).toEqual(20);
	});

	it("should have a power saving mode set to on by default", function() {
		expect(thermostat.powerSavingMode).toBe(true);
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
	  });

    it("should reset to 20 degrees", function() {
      for(count = 0; count < 11; count++) {
        thermostat.decreaseTemperature();
      }
      thermostat.resetTemperature()
      expect(thermostat.temperature).toEqual(20)
    })

    describe("energy usage", function() {

    beforeEach(function() {
  		thermostat.powerSavingModeOff();
  	});

      it("should return 'low usage' if the temperature is less than 18 degrees",  function() {
        for(count = 0; count < 5; count++) {
          thermostat.decreaseTemperature();
        }
        expect(thermostat.currentEnergyUsage()).toEqual("low-usage")
      });

      it("should return 'medium-usage' if the temperature is between 18-25 degrees", function() {
      	expect(thermostat.currentEnergyUsage()).toEqual("medium-usage")
      });

      it("should return 'high-usage' if the temperature is above 25 degrees", function() {
      	for(count = 0; count < 6; count++) {
          thermostat.increaseTemperature();
        }
      	expect(thermostat.currentEnergyUsage()).toEqual("high-usage")
      });

    });


  describe("Power Saving Mode - OFF", function() {

  	beforeEach(function() {
  		thermostat.powerSavingModeOff();
  	});

	  it("should have a maximum temperature of 32 degrees", function() {
	    for(count = 0; count < 13; count++) {
	      thermostat.increaseTemperature();
	    }
	    expect(thermostat.temperature).toEqual(32)
	  });

  });

	describe("Power Saving Mode - ON", function() {

		beforeEach(function() {
			thermostat.powerSavingModeOn();
		});

	  it("should have a maximum temperature of 25 degrees", function() {
	    for(count = 0; count < 6; count++) {
	      thermostat.increaseTemperature();
	    }
	    expect(thermostat.temperature).toEqual(25)
	  });

	});

});
