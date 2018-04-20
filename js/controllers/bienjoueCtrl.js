app.controller('bienjoueCtrl', function($scope, $http, varShared)
{
	$scope.question1 = true;
    $scope.scoreBilan = null
	varShared.getScore()
    .then(
        function(result)
        {
            $scope.scoreBilan = result;
            console.log($scope.scoreBilan);
        }
    );
    var victory = new Audio('media/sounds/VictoryLOL.mp3');
    var foule = new Audio('media/sounds/foule.mp3');
    victory.loop = true;
    foule.loop = true;
    victory.play();
    foule.play()
    $scope.listImage = null;

    $http.post('getVignette.php',
    {
    	'idPersonne' : sessionStorage.getItem('id')
    })
    .then(function(response)
    {
    	$scope.listImage = response.data;
    	console.log($scope.listImage);
    });
});