(function() {

	angular
		.module('tasks')
		.controller('TaskList', TaskList);

	TaskList.$inject = ['$route', '$location', 'tasksSrv', 'data'];
	
	function TaskList($route, $location, tasksSrv, data) {
		var $ctrl = this;
		
		// $ctrl.tasks = data;
		$ctrl.tasks = $route.current.locals.data;
		// $ctrl.tasks = tasksSrv.getAllTasks();

		$ctrl.refreshTaskList = function() {
			console.log('refresh');
			$route.reload();
		};

		$ctrl.go = function(url) {
			$location.url(url);
		};
	}

})();
