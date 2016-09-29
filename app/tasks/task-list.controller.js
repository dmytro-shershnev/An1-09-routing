(function() {

	angular
		.module("tasks")
		.controller("TaskList", TaskList);

	TaskList.$inject = ["tasksSrv"];
	
	function TaskList(tasksSrv) {
		var $ctrl = this;
		
		$ctrl.tasks = tasksSrv.getAllTasks();
	}

})();
