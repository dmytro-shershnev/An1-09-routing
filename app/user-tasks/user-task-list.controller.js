(function() {
    angular
        .module('userTasks')
        .controller('UserTaskList', UserTaskList);

    UserTaskList.$inject = ['$routeParams', '$route', 'tasksSrv'];

    function UserTaskList($routeParams, $route, tasksSrv) {
        let $ctrl = this;

        $ctrl.tasks = tasksSrv.getUserTasks($routeParams['userId']);
        // console.log($routeParams['userId']);

        console.log($route.current.params['userId']);
        console.log($route.current.pathParams['userId']);
        console.log($route.current.params['a']);
        console.log($route.current.pathParams['a']);
        console.log($route.current);
    }

})();