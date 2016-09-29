(function() {

	angular
		.module("tasks")
		.controller("AddTask", AddTask);

	AddTask.$inject = ["usersSrv", "tasksSrv"];
	
	function AddTask(usersSrv, taskSrv) {
		var $ctrl = this;

		usersSrv.getData().then(function(data) {
			$ctrl.users = data;
		});
	}

})();