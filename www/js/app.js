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
	
	//making option to submit input with keypress enter or return on mobile phone
	$scope.inputEnter = function() {
		if(event.which == 13 && $scope.todos.name != '') {
			$scope.makeNewTodoItem();
		}
	};

	//todos factory 
	$scope.makeNewTodoItem = function () {
		//checking if input has some value
		if ($scope.todos.name != '') {
		
		//pushing to array 
		$scope.todoItems.push(
			{
				name: $scope.todos.name,
				description: $scope.todos.description
			}
		);
		//clearing input field after pushing to array
		$scope.todos.name = '';
		$scope.todos.description = '';
	
		localStorage['todosList'] = JSON.stringify($scope.todoItems);
		console.log(localStorage);
		}
	};

	
	var todoItemsData = localStorage['todosList'];
		if (todoItemsData !== undefined) {
			$scope.todoItems = JSON.parse(todoItemsData)
		}


	$scope.deleteTodoItem = function ($index) {

		$scope.todoItems.splice($index, 1);

	};
});
