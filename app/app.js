(function(){
	'use strict';

	// Defining the app model with all other dependent modules
	var progressionGenerator = angular.module('progressionGenerator',['ui.router',
		'progressionGenerator.home']);

	progressionGenerator.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

		$stateProvider
			.state('home',{
				url: '/home',
				views: {
					'header' : {
						templateUrl: 'components/core/header.html'
					},
					'main' : {
						controller: 'HomeController as home',
						templateUrl: 'components/home/homeView.html'
					},
					'footer' : {
						templateUrl: 'components/core/footer.html'
					}
				}

			});

		// Declaration of the default route if neither of the controllers
		// is supporting the request path
		$urlRouterProvider.otherwise('/home');

		// Settings for http communications
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];

		// disabling # in Angular urls
		// $locationProvider.html5Mode({
		// 		enabled: true,
		//      requireBase: false
		// });
	});
})();
