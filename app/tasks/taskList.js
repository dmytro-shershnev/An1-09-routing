(function() {

	angular
		.module("tasks")
		.controller("taskList", taskList);

	taskList.$inject = ["tasksSrv"];
	
	function taskList($scope, tasksSrv) {
		var vm = this;
		
		vm.tasks = tasksSrv.getAllTasks();
	}

})();