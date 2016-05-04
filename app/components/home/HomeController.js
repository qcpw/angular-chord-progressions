// HomeController.js
// For distribution, all controllers
// are concatanated into single app.js file
// by using Gulp

(function() {
  'use strict';

  angular
  .module('progressionGenerator.home')
  .controller('HomeController', homeController);

	function homeController(progressionService) {
		var vm = this;

		vm.generateProgression = generateProgression;
		vm.getRandomProgressionLength = getRandomProgressionLength;

		vm.progression = [];
		vm.progressionLength = 3;

		vm.maxProgressionLength = 5;
		vm.minProgressionLength = 3;

		vm.completeCadence = false;

		activate();

		function activate(){
			generateProgression("I", vm.progressionLength);
		}

		/**
		 * return a random integer between min and max
		 * @param  {integer} min
		 * @param  {integer} max
		 * @return {integer}     random value between min and max (inclusive)\
		 **/
		function getRandomProgressionLength() {
			return Math.floor(Math.random() * (vm.maxProgressionLength - vm.minProgressionLength + 1)) + vm.minProgressionLength;
		}

		function generateProgression(startChord, length){
			length = length || getRandomProgressionLength(vm.progressionMinLength, vm.progressionMaxLength);
			console.log("generating progression with length: " + length);
			vm.progression = progressionService.generateProgression(startChord, length, vm.completeCadence);
		}
	}

})();
