(function() {

	angular
		.module('tasks')
		.controller('TaskList', TaskList);

	TaskList.$inject = ['$route', 'tasksSrv', 'data'];
	
	function TaskList($route, tasksSrv, data) {
		var $ctrl = this;
		
		// $ctrl.tasks = data;
		$ctrl.tasks = $route.current.locals.data;
		// $ctrl.tasks = tasksSrv.getAllTasks();
	}

})();
