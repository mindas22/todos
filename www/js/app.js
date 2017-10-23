var myApp = angular.module('myModule', []);

myApp.controller('mainController', function($scope) {
	//defining array for list items
	var todoItems = [];

	//defining todos.name and todos.description (description not used in app yet). 
	$scope.todos = {
    name: '',
    description: ''
	}

	$scope.todoItems = todoItems;
	
	//todos factory 
	$scope.makeNewTodoItem = function () {
		//checking if input has some value
		if ($scope.todos.name != '') {
		
		//pushing to array 
		$scope.todoItems.push({
			name: $scope.todos.name,
			description: $scope.todos.description
		});
		//clearing input field after pushing to array
		$scope.todos.name = '';
		$scope.todos.description = '';
	
		localStorage['todosList'] = JSON.stringify($scope.todoItems);
		
		}
	};


	var todoItemsData = localStorage['todosList'];
		if (todoItemsData) {
			$scope.todoItems = JSON.parse(todoItemsData);
		}


	$scope.deleteTodoItem = function ($index) {

		$scope.todoItems.splice($index, 1);
		localStorage['todosList'] = JSON.stringify($scope.todoItems);
	};
});
