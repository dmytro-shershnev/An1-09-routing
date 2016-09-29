(function() {

	angular
		.module("users")
		.factory("usersSrv", usersSrv);

	usersSrv.$inject = ["$http", "$q"];

	function usersSrv($http, $q) {
		return {
			getData
		};

		function getData() {
			var dfd = $q.defer();

			$http
				.get("./data/users.json")
				.then(onSuccess)
				.catch(onError);

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