(function() {

	angular
		.module("userTasks")
		.controller("userTaskList", userTaskList);

	userTaskList.$inject = ["tasksSrv"];

	function userTaskList(tasksSrv) {
		
	}

})();