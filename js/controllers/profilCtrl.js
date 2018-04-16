app.controller('profilCtrl', function($scope, $http)
{
	$scope.listeCorps = [];
	$scope.tete = "";
	$scope.tshirt = "";
	$scope.cheveux = "";
	$scope.barbe = "";
	$http.post("getAvatar.php",
	{
		'idPersonne' : sessionStorage.getItem('id')
	})
	.then(function(response)
	{
		// $scope.listeCorps = response.data;
		$scope.tete = response.data[0].LIB_PARTIE;
		$scope.cheveux = response.data[1].LIB_PARTIE;
		$scope.tshirt = response.data[2].LIB_PARTIE;
		$scope.barbe = response.data[3].LIB_PARTIE;
	});
});