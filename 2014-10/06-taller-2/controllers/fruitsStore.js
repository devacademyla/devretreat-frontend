angular.module("fruitsStore")
	.constant("dataUrl", "http://localhost:5500/products")
	.controller("fruitsStoreCtrl", function ($scope, $http, dataUrl) {
		$scope.data = {};
		$http.get(dataUrl)
			.success(function (data) {
				$scope.data.products = data;
			})
			.error(function (error) {
				$scope.data.error = error;
			});
	});