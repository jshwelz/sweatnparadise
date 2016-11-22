

	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);
	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider
			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'mainController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'mainController'
			})

			// route for the contact page
			.when('/calendar', {
				templateUrl : 'pages/calendar.html',
				controller  : 'calendarController'
			})
			// route for the contact page
			.when('/thankyou', {
				templateUrl : 'pages/thankyou.html',
				controller  : 'mainController'
			});

	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', ['$scope', '$http', function($scope, $http) {
		// create a message to display in our view
    console.log("Hello World from Main controller");

		$scope.addContact = function (



		) {
        console.log($scope.contact);
        $http.post('/contact',$scope.contact).success(function(response){
        console.log(response);
      	//  refresh();
				var earl = '/thankyou';
				$location.path(earl);
				$scope.contact = "";
      });
    };

		var addNewsLetter = function () {
        console.log($scope.user);
        $http.post('/news',$scope.user).success(function(response){
					$scope.contact = "";
				//console.log(response);
      //  refresh();
      });
    };


			$scope.validateEmail =  function validate(){
				var email = $scope.user.email;
				var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

				if(!regex.test(email)){
					alert('please provide a valid email adress.')
					 $("#email").focus();
					return false;
				}else{
					addNewsLetter();
					$scope.user = "";
					$('#signup').tooltip('show');

				}
			};





	}]);
