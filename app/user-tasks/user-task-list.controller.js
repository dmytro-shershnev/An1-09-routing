(function() {

	angular
		.module("userTasks")
		.controller("UserTaskList", UserTaskList);

	UserTaskList.$inject = ['$routeParams', 'tasksSrv'];
	
	function UserTaskList($routeParams, tasksSrv) {
        let $ctrl = this;

        $ctrl.tasks = tasksSrv.getUserTasks($routeParams['userId']);
        console.log($routeParams['userId']);
	}

})();