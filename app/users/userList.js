(function() {

	angular
		.module("users")
		.controller("userList", userList);

	userList.$inject = ["usersSrv"];

	function userList(usersSrv) {
		var vm = this;

		usersSrv.getData().then(function(data) {
			vm.users = data;
		});
	}

})();