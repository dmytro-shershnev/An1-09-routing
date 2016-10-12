(function() {

	angular
		.module('tasks')
		.controller('AddTask', AddTask);

	AddTask.$inject = ['$location', 'usersSrv', 'tasksSrv'];
	
	function AddTask($location, usersSrv, taskSrv) {
		var $ctrl = this;

		usersSrv.getData().then(function(data) {
			$ctrl.users = data;
		});

		$ctrl.go = function(url) {
			$location.url(url);
		};
	}

})();