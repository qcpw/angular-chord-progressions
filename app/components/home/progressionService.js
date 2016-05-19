(function() {
  'use strict';

  angular
  .module('progressionGenerator.home')
  .factory('progressionService',progressionService);

  progressionService.$inject = ['$http'];



//TODO: load progression data from external source

var chordProgressions = {
"I" : ["I", "ii", "iii", "IV", "V", "vi", "vii0"],
"i" : ["i", "VII", "III", "VI", "ii0", "iv", "V", "vii0"],
"iii" : ["vi"],
"VII" : ["III"],

"vi" : [ "ii", "IV" ],
"III" : [ "VI" ],
"VI" : [ "ii0, iv" ],

//predominants
"ii" : ["V"],
"IV" : ["vii0"],
"ii0" : ["V"],
"iv" : ["vii0", "VII"],

//dominants
"V" : ["I"],
"vii0" : ["I", "iii"]

};

  function progressionService($http) {
    var service = {
      generateProgression : generateProgression,
      chordProgressions : chordProgressions
    }

    return service;
    ///////////////////


/**
 * chooseRandom - return a random entry in an array
 **/
 function chooseRandom(arr) {
   var index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }

/**
 * chooseNextChord - return a (relatively) reasonable
 * next chord given a starting chord
 **/
  function chooseNextChord(currentChord) {
    var choices = chordProgressions[currentChord];
    return chooseRandom(choices);
  }

  function generateProgression(startChord, length, completeCadence) {
    var progression = [startChord];
    var lastChord = startChord;

    //start index at 1, since we already counted the start chord
    for(var i = 1; i < length; i++) {
      lastChord = chooseNextChord(lastChord);
      progression.push(lastChord);
    }

    //TODO: see if there's an alternate strategy where we can work backward from V,
    //rather than generating the full progression multiple times
    if(completeCadence && progression[progression.length-1] !== "V"){
      progression = generateProgression(startChord, length, completeCadence);
    }

    return progression;
  }

  }
})();
