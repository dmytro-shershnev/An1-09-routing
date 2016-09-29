(function() {

	angular
		.module("userTasks")
		.controller("UserTaskList", UserTaskList);

	UserTaskList.$inject = ["tasksSrv"];
	
	function UserTaskList(tasksSrv) {
		
	}

})();