(function() {

	angular
		.module('TPapp')
		.controller('MainCtrl', MainCtrl);

	function MainCtrl($state,$location) {
		var mainVm = this;
		console.log('Main page loaded correctly.');


		mainVm.toMap = toMap;

		function toMap() {
			console.log('This works');
			$location.path('/map');
			// $state.go('map');
		}

		

	}


})();