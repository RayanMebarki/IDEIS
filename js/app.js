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
	.when('/monProfil',
	{
		templateUrl : 'templates/monProfil.html',
		controller : 'profilCtrl'
	})
	.when('/bienJoue',
	{
		templateUrl : "templates/bienJoue.html",
		controller : 'bienjoueCtrl'
	})
	.when('/disconnect',
	{
		templateUrl : "templates/disconnect.html",
		controller : 'disconnectCtrl'
	})
	.otherwise(
	{
		templateUrl : "templates/disconnect.html",
		controller : "disconnectCtrl"
	});
});