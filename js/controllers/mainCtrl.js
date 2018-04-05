app.controller("mainCtrl", function($scope, $http)
{
	$scope.ready = false;
	$scope.reponseQuestion = [];
	console.log('OK');
	$scope.list = null;

	$scope.droppedObjects1 = [
		{name: 'Motivation', id: 1},
		{name: "Confiance", id: 2},
		{name: "Évolution Professionnelle", id: 3}
	];

	$scope.init = function()
	{
		$scope.droppedObjects1 = [
			{name: 'Motivation', id: 1},
			{name: "Confiance", id: 2},
			{name: "Évolution Professionnelle", id: 3}
		];
		$scope.droppedObjects2 = [];
	}

	$scope.displayCells = function()
	{
		$scope.newList = [];
	    $http.get("json.php")
	    .then(function(response)
	    {
	        $scope.list = response.data;
	        //console.log($scope.list.confiance);
	    });
		$scope.droppedObjects2.forEach(function(element)
		{
			switch(element.id)
			{
				case 1:
					$scope.newList.push($scope.list.motivation);
					console.log($scope.newList);
				break;

				case 2:
					$scope.newList.push($scope.list.confiance);
					console.log($scope.newList);
				break;

				case 3:
					$scope.newList.push($scope.list.evolutionPro);
					console.log($scope.newList);
				break;
			}
		});
		$scope.tableauDeReponse = [];
		$scope.tableauDeReponse = $scope.newMotivation;
		$scope.tableauDeReponse = $scope.newConfiance;
		$scope.tableauDeReponse = $scope.newEvolution;
		$scope.ready = true;
	}

	$scope.droppedObjects2 = [];
        
        // Drop succes sur la Zone 1        
        $scope.onDropComplete1=function(data,evt){
            var index = $scope.droppedObjects1.indexOf(data);
            if (index == -1){
                $scope.droppedObjects1.push(data);
            }
        }
        
        // Drag succes depuis la Zone 1        
        $scope.onDragSuccess1=function(data,evt){
            var index = $scope.droppedObjects1.indexOf(data);
            if (index > -1) {
                $scope.droppedObjects1.splice(index, 1);
            }
        }

        // Drag succes depuis la Zone 2    
        $scope.onDragSuccess2=function(data,evt){
            var index = $scope.droppedObjects2.indexOf(data);
            if (index > -1)
            {
                $scope.droppedObjects2.splice(index, 1);
                console.log("ICI");
            }
        }
        
        // Drop succes sur la Zone 2  
        $scope.onDropComplete2=function(data,evt){
            var index = $scope.droppedObjects2.indexOf(data);
            if (index == -1)
            {
                $scope.droppedObjects2.push(data);
                console.log($scope.droppedObjects2);
            }
        }

    $http.get("json.php")
    .then(function(response)
    {
        $scope.list = response.data;
        console.log($scope.list);
    });
});