(function() {
  'use strict';

  angular
  .module('progressionGenerator.home')
  .controller('HomeController', homeController);

	function homeController(progressionService) {
    //Capture the context of the controller, since we're using controllerAs syntax
		var vm = this;

    //function bindings
		vm.generateProgression = generateProgression;
		vm.getRandomProgressionLength = getRandomProgressionLength;

    //default settings for the progression generation
		vm.progression = [];
		vm.progressionLength = 3;
		vm.maxProgressionLength = 5;
		vm.minProgressionLength = 3;
		vm.completeCadence = false;

    //initialization upon entry to the controller
		activate();

		function activate(){
      //make sure the page initially displays a progression
			generateProgression("I", vm.progressionLength);
		}

		/**
		 * return a random integer between min and max
		 * @param  {integer} min
		 * @param  {integer} max
		 * @return {integer}     random value between min and max (inclusive)
		 **/
		function getRandomProgressionLength() {
			return Math.floor(Math.random() * (vm.maxProgressionLength - vm.minProgressionLength + 1)) + vm.minProgressionLength;
		}

    /**
     * Given an initial chord and a desired length, generate a chord progression
     * and set its value in the viewModel ($scope)
     * @param  {String} startChord Chord on which to start the progression
     * @param  {[type]} length     Length of the desired chord progression
     */
		function generateProgression(startChord, length){
      //if no length is provided, use the min and max settings from the viewModel
      //to generate a random length
			length = length || getRandomProgressionLength(vm.progressionMinLength, vm.progressionMaxLength);
			console.log("generating progression with length: " + length);
			vm.progression = progressionService.generateProgression(startChord, length, vm.completeCadence);
		}
	}

})();
