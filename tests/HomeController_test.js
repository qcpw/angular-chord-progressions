'use strict';

describe('HomeController Tests :', function() {

  // Only loading one module which is being tested
  beforeEach(module('progressionGenerator.home'));

  describe('Loading HomeController. It...', function(){

    // custom variables needed during the tests
    var scope;
    var controller;

    // Get the controller
    beforeEach(inject(function($controller,$rootScope){
      scope = $rootScope.$new();
      controller = $controller("HomeController", {$scope: scope});

    }));


    it('should be defined', inject(function() {
      expect(controller).toBeDefined();
    }));

    it('should initially generate a progression of length 3-5', inject(function() {
      var progLength = controller.progression.length;
      expect(progLength).toBeGreaterThan(2);
      expect(progLength).toBeLessThan(6); 
    }));
  });

});
