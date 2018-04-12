var app = angular.module("myIdeis", ['ngDraggable', 'ngRoute']);

app.config(function($routeProvider)
{
	$routeProvider
	.when("/",
	{
		templateUrl : "templates/accueil.html",
		controller : 'accueilCtrl'
	})
	.when('/avatar',
	{
		templateUrl : "templates/avatar.html",
		controller : "avatarCtrl"
	})
	.when('/questionnaire',
	{
		templateUrl : 'templates/propositions.html',
		controller : 'mainCtrl'
	})
	.otherwise(
	{
		templateUrl : "templates/accueil.html",
		controller : "accueilCtrl"
	});
});