var myApp = angular.module('myModule', []);

myApp.controller('myFirstController', function($scope) {

	var todoItems = [];

	$scope.todoItems = todoItems;
	// should change name for todos
	$scope.makeNewTodoItem = function () {
		if ($scope.todos.name != "") {
			
		$scope.todoItems.push(
			{
				name: $scope.todos.name,
				description: $scope.todos.description
			}
		);
		//clearing input after pushing to array
		$scope.todos.name = "";
	}
	};

	$scope.deleteTodoItem = function ($index) {

		$scope.todoItems.splice($index, 1);

	};
});
