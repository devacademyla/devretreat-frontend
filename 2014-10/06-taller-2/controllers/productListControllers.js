angular.module("fruitsStore")
	.constant("productListActiveClass", "btn-active")
	.controller("productListCtrl", function ($scope, productListActiveClass) {
		var selectedCategory = null;
		
		$scope.selectCategory = function (newCategory) {
			selectedCategory = newCategory;
		}
		
		$scope.categoryFilterFn = function (product) {
			return selectedCategory == null ||
			product.category == selectedCategory;
		}

		$scope.getCategoryClass = function (category) {
			return selectedCategory == category ? productListActiveClass : "";
		}
	});