(function() {

	angular
		.module('app')
		.config(configAppRouter)
		.run(runApp);

	function configAppRouter($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'tasks/task-list.html',
                controller: 'TaskList',
                controllerAs: '$ctrl'
            })
            .when('/addTask', {
                templateUrl: 'tasks/add-task.html',
                controller: 'AddTask',
                controllerAs: '$ctrl'
            })
            .when('/users', {
                templateUrl: 'users/user-list.html',
                controller: 'UserList',
                controllerAs: '$ctrl'
            });
	}

	function runApp() {
	}
	
})();