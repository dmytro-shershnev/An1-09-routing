(function() {

	angular
		.module('users')
		.controller('UserList', UserList);

	UserList.$inject = ['$location', 'usersSrv'];

	function UserList($location, usersSrv) {
		var $ctrl = this;

		usersSrv.getData().then(function(data) {
			$ctrl.users = data;
		});

		$ctrl.go = function(url) {
			$location.url(url);
		};
	}

})();