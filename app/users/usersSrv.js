(function() {

	angular
		.module("users")
		.factory("usersSrv", usersSrv);

	usersSrv.$inject = ["$http", "$q"];

	function usersSrv($http, $q) {
		return {
			getData: getData
		};

		function getData() {
			var dfd = $q.defer();

			$http
				.get("./data/users.json")
				.success(onSuccess)
				.error(onError);

			function onSuccess(data) {
				dfd.resolve(data);
			}

			function onError(response) {
				dfd.reject(response);
			}

			return dfd.promise;
		}
	}

})();