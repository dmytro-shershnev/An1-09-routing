(function() {

	angular
		.module("tasks")
		.controller("addTask", addTask);

	addTask.$inject = ["usersSrv", "tasksSrv"];
	
	function addTask(usersSrv, taskSrv) {
		var vm = this;

		usersSrv.getData().then(function(data) {
			vm.users = data;
		});
	}

})();