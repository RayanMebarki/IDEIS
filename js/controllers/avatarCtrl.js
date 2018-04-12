app.controller('avatarCtrl', function($scope, varShared)
{

	$scope.message = "Hello Avatar ! Tu as " + varShared.getScore() + "points";
});