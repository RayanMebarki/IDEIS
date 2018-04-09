app.controller("mainCtrl", function($scope, $http)
{
	$scope.ready = false;
	$scope.j = 0; // compteur de sous-catégorie
	$scope.score  = 0;
	$scope.depose = true;
	$scope.reponseQuestion = [];
	$scope.list = null;
	$scope.nbClick = 0;
	$scope.saveProposition = [];

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
			var indexProposition = $scope.saveProposition.indexOf(this.realItem);
			$scope.saveProposition.splice(indexProposition, 1);
			console.log($scope.saveProposition);
			$scope.score -= 10;
		} else
		{
			var indexProposition = $scope.saveProposition.indexOf(this.realItem);
			$scope.saveProposition.push(this.realItem);
			console.log($scope.saveProposition);
			$scope.score += 10;
		}
	}

	$scope.index = 0;
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
				$scope.index += 12;
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
        
        $scope.onDropComplete1=function(data,evt){
            var index = $scope.droppedObjects1.indexOf(data);
            if (index == -1){
                $scope.droppedObjects1.push(data);
            }
        }
        
        $scope.onDragSuccess1=function(data,evt){
            var index = $scope.droppedObjects1.indexOf(data);
            if (index > -1) {
                $scope.droppedObjects1.splice(index, 1);
            }
        }

        $scope.onDragSuccess2=function(data,evt){
            var index = $scope.droppedObjects2.indexOf(data);
            if (index > -1)
            {
                $scope.droppedObjects2.splice(index, 1);
            }
        }
        
        $scope.onDropComplete2=function(data,evt){
            var index = $scope.droppedObjects2.indexOf(data);
            if (index == -1)
            {
                $scope.droppedObjects2.push(data);
            }
            if ($scope.onDropComplete2.length == 3)
            {
            	$scope.depose = false;
            }
        }

    $http.get("json.php")
    .then(function(response)
    {
        $scope.list = response.data;
    });
});