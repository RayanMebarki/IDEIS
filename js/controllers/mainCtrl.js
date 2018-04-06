app.controller("mainCtrl", function($scope, $http)
{
	$scope.ready = false;
	$scope.score  = 0;
	$scope.reponseQuestion = [];
	$scope.list = null;
	$scope.nbClick = 0;

	$scope.droppedObjects1 = [
		{name: 'Motivation', id: 1},
		{name: "Confiance", id: 2},
		{name: "Évolution Professionnelle", id: 3},
		{name: "Ce n'est pas l'ecole", id: 4},
		{name: "Immersion en entreprise", id: 5},
		{name: "Contenu de la formation", id: 6},
	];

	$scope.init = function()
	{
		$scope.droppedObjects1 = [
			{name: 'Motivation', id: 1},
			{name: "Confiance", id: 2},
			{name: "Évolution Professionnelle", id: 3},
			{name: "Ce n'est pas l'ecole", id: 4},
			{name: "Immersion en entreprise", id: 5},
			{name: "Contenu de la formation", id: 6},
		];
		$scope.droppedObjects2 = [];
	}

	$scope.scoreIncrement = function()
	{
		this.nbClick ++;
		if (this.nbClick % 2 == 0)
		{
			$scope.score -= 10;
		} else
		{
			$scope.score += 10;
		}
	}

	$scope.displayCells = function()
	{
		if ($scope.droppedObjects2.length == 3)
		{
			$scope.newList = [];
		    $http.get("json.php")
		    .then(function(response)
		    {
		        $scope.list = response.data;
		    });
			$scope.droppedObjects2.forEach(function(element)
			{
				switch(element.id)
				{
					case 1:
						$scope.newList.push($scope.list.motivation);
					break;

					case 2:
						$scope.newList.push($scope.list.confiance);
					break;

					case 3:
						$scope.newList.push($scope.list.evolutionPro);
					break;

					case 4:
						$scope.newList.push($scope.list.pasEcole);
					break;

					case 5:
						$scope.newList.push($scope.list.immersionEntreprise);
					break;

					case 6:
						$scope.newList.push($scope.list.contenuFormation);
					break;
				}
			});
			$scope.tableauDeReponse = [];
			$scope.tableauDeReponse = $scope.newMotivation;
			$scope.tableauDeReponse = $scope.newConfiance;
			$scope.tableauDeReponse = $scope.newEvolution;
			$scope.ready = true;
		}
		else
		{
			alert('Nombre d\'item incorrect')
		}
	
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
            }
        }
        
        // Drop succes sur la Zone 2  
        $scope.onDropComplete2=function(data,evt){
            var index = $scope.droppedObjects2.indexOf(data);
            if (index == -1)
            {
                $scope.droppedObjects2.push(data);
            }
        }

    $http.get("json.php")
    .then(function(response)
    {
        $scope.list = response.data;
    });
});