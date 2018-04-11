/**

.______          ___   ____    ____  ___      .__   __.    .___  ___.  _______ .______        ___      .______       __  ___  __  
|   _  \        /   \  \   \  /   / /   \     |  \ |  |    |   \/   | |   ____||   _  \      /   \     |   _  \     |  |/  / |  | 
|  |_)  |      /  ^  \  \   \/   / /  ^  \    |   \|  |    |  \  /  | |  |__   |  |_)  |    /  ^  \    |  |_)  |    |  '  /  |  | 
|      /      /  /_\  \  \_    _/ /  /_\  \   |  . `  |    |  |\/|  | |   __|  |   _  <    /  /_\  \   |      /     |    <   |  | 
|  |\  \----./  _____  \   |  |  /  _____  \  |  |\   |    |  |  |  | |  |____ |  |_)  |  /  _____  \  |  |\  \----.|  .  \  |  | 
| _| `._____/__/     \__\  |__| /__/     \__\ |__| \__|    |__|  |__| |_______||______/  /__/     \__\ | _| `._____||__|\__\ |__| 
                                                                                                                                  
*/


app.controller("mainCtrl", function($scope, $http, $sce)
{
    var retry = new Audio('media/sounds/yesYouCan.mp3');
    var victory = new Audio('media/sounds/VictoryLOL.mp3');
    var foule = new Audio('media/sounds/foule.mp3');
    var nbClickInfini = 0;
	$scope.ready = false;
	$scope.j = 0; // compteur de sous-catégorie
	$scope.score  = 0;
	$scope.depose = true;
	$scope.reponseQuestion = [];
	$scope.list = null;
	$scope.nbClick = 0;
	$scope.saveProposition = [];
	$scope.tabMemory = [];
	$scope.challenge = 0;
	


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
		$scope.saveProposition = [];
		$scope.newList = [];
		$scope.newList2 = [];
		$scope.score = 0;
		$scope.dropIsOk = false;
		$scope.nbPropositionIsOk = false;
		$scope.droppedObjects2NotNullIsOk = false;

		$scope.dropIsOk = true;
	}

	$scope.scoreIncrement = function()
	{
		this.nbClick ++;
		if (this.nbClick % 2 == 0)
		{
			$(this).css("backgroundColor", "red"); // NOT WORKING
			var indexProposition = $scope.saveProposition.indexOf(this.realItem);
			$scope.saveProposition.splice(indexProposition, 1);
			console.log($scope.saveProposition);
			$scope.score -= 10;
		} else
		{
			$(this).css("backgroundColor", "blue"); // NOT WORKING
			var indexProposition = $scope.saveProposition.indexOf(this.realItem);
			$scope.saveProposition.push(this.realItem);
			console.log($scope.saveProposition);
			$scope.score += 10;
			if ($scope.score >= 10)
			{
				$scope.nbPropositionIsOk = true;
				$scope.dropIsOk = false;
			}
		}
	}

	$scope.index = 0;
	$scope.displayCells = function()
	{
		$scope.dropIsOk = false;
		if ($scope.droppedObjects2.length == 6)
		{
			$scope.newList = [];
			$scope.newList2 = [];
		    $http.get("json.php")
		    .then(function(response)
		    {
		        $scope.list = response.data;
		    });

		    for (var i = 3; i < 6; i++)
		    {
				switch($scope.droppedObjects2[i].id)
				{
					case 1:
						$scope.newList2.push($scope.list.motivation);
					break;

					case 2:
						$scope.newList2.push($scope.list.confiance);
					break;

					case 3:
						$scope.newList2.push($scope.list.evolutionPro);
					break;

					case 4:
						$scope.newList2.push($scope.list.pasEcole);
					break;

					case 5:
						$scope.newList2.push($scope.list.immersionEntreprise);
					break;

					case 6:
						$scope.newList2.push($scope.list.contenuFormation);
					break;
				}		    	
		    }

		    for (var i = 0; i < 3; i++)
		    {
				switch($scope.droppedObjects2[i].id)
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
		    }

			$scope.tableauDeReponse = [];
			$scope.tableauDeReponse = $scope.newMotivation;
			$scope.tableauDeReponse = $scope.newConfiance;
			$scope.tableauDeReponse = $scope.newEvolution;
			$scope.ready = true;
		}
		else
		{
			alert('Tu n\'as pas classé toutes les catégories');
		}
	
	}

	$scope.prepare2 = function()
	{
		$scope.ready2 = true;
		$scope.showVictory = false;
	}

	$scope.droppedObjects2 = [];
        
        
        $scope.onDragSuccess1=function(data,evt)
        {
            var index = $scope.droppedObjects1.indexOf(data);
            if (index > -1)
            {
                $scope.droppedObjects1.splice(index, 1);
            }
        }

        $scope.onDragSuccess2=function(data,evt)
        {
            var index = $scope.droppedObjects2.indexOf(data);
            if (index > -1)
            {
                $scope.droppedObjects2.splice(index, 1);
            }
        }
        
        $scope.onDropComplete2=function(data,evt)
        {
            var index = $scope.droppedObjects2.indexOf(data);
            if (index == -1)
            {
                $scope.droppedObjects2.push(data);
		        if ($scope.droppedObjects2.length == 6)
		        {
		        	$scope.dropIsOk = true;
		        }
		        if ($scope.droppedObjects2.length >= 1)
		        {
		        	$scope.droppedObjects2NotNullIsOk = true;
		        }
            }
            if ($scope.onDropComplete2.length == 3)
            {
            	$scope.depose = false;
            }
        }

        $scope.insertProposition = function()
        {
        	// FONCTIONNE

/*        	$scope.saveProposition.forEach(function(element)
        	{
        		$http.post('insert.php',
        		{
        			'content' : element
        		})
        		.then(function(response)
        		{
        		}, function(response)
        		{
        			console.error("Erreur ! " + response);
        		});
        	});*/

        	if ($scope.score <= 40)
        	{
        		memoryGame();
        	} else
        	{
        		$scope.showReponse2 = true;
        	}
        }

    $scope.showCard = false;


    function memoryGame()
    {
    	console.log('toto');
    	$scope.showCard = false;
    	$scope.nbPropositionIsOk = false;
    	$scope.ready = false;
    	$scope.memory = true;
    	$scope.recommencer = false;
    	$scope.tabMemory = [];
    	for ($scope.i = 0; $scope.i < 3; $scope.i++)
    	{
    		$scope.tabMemory.push($scope.i);
    	}
    	for ($scope.i = 0; $scope.i < 3; $scope.i++)
    	{
    		$scope.tabMemory.push($scope.i);
    	}
    }

    $scope.yesYouCan = function()
    {
		
		retry.play();
		memoryGame();
    }

    var nbClickMemory = 0;
    $scope.hideCard = null;
    var index1 = null;
    $scope.scoreMemory = 0;
    var saveFirstCard = null;
    $scope.checkMemory = function(myIndex)
    {
    	nbClickMemory++;
    	if (nbClickMemory == 1)
    	{
	    	this.showCard = true;
	    	this.index = myIndex;
	    	index1 = $scope.tabMemory[this.index];
	    	saveFirstCard = this.showCard;
	    	// console.log(index1);
    	}
    	if (nbClickMemory == 2)
    	{
	    	this.showCard = true;
	    	this.index = myIndex;
	    	var index2 = $scope.tabMemory[this.index];
	    	// console.log("Premier clic : " + index1);
	    	// console.log("Second clic : " + index2);
	    	if (index1 == index2)
	    	{
	    		$scope.scoreMemory++;
	    		nbClickMemory = 0;
	    		// console.log("Score :  " + $scope.scoreMemory);
	    		if ($scope.scoreMemory >= 3)
	    		{
	    			$scope.showVictory = false;
	    			$scope.tabMemory = [];
					// victory.play();
					// foule.play();
					$scope.score = 100;
					$scope.challenge = 2;
					checkChallenge();
					$scope.memory = false;
	    		}
	    	} else
	    	{
	    		$scope.scoreMemory = 0;
	    		// console.log("Score :  " + $scope.scoreMemory);
	    		nbClickMemory = 0;
	    		// this.showCard = false;
	    		// saveFirstCard = false;
	    		$scope.tabMemory = [];
	    		// sleep(2000);
	    		$scope.showCard = false;
	    		$scope.recommencer = true;
	    		// console.log($scope.showCard);
	    	}
    	}
    }


    function checkChallenge()
    {
        console.log($scope.challenge);
	    switch($scope.challenge)
	    {
	    	case 2:

	    	$scope.clicInfini = true;
	    	$scope.cliqueDeLinfini();
	    	break;

	    	case 3:
	    	questionnaire1();
	    	break;

	    	case 4:
	    	idk();
	    	break;
	    }
    }


    $scope.cliqueDeLinfini = function()
    {
    	$scope.egg = true;
    	nbClickInfini ++;
    	if (nbClickInfini == 4 || nbClickInfini == 13)
    	{
    		retry.play();
    	}
    	if (nbClickInfini == 20)
    	{
    		$scope.egg = false;
    		$scope.easterEgg = true;
    	}
    }
    $scope.displayVideo = function(idVideo)
    {
    	switch(idVideo)
    	{
    		case 1:
    		$scope.codeVideo = $sce.trustAsResourceUrl("https://www.youtube.com/embed/ffRUntstOdw?autoplay=1");
    		break;

    		case 2:
    		$scope.codeVideo = $sce.trustAsResourceUrl("https://www.youtube.com/embed/l1zLNzVC_vw?autoplay=1");
    		break;

    		case 3:
    		$scope.codeVideo = $sce.trustAsResourceUrl("https://www.youtube.com/embed/Hrja93QLYR8?t=66&autoplay=1");
    		break;
    	}
    	$scope.easterEgg = false;
    	$scope.pygargue = true;
    }

    $http.get("json.php")
    .then(function(response)
    {
        $scope.list = response.data;
    });
});