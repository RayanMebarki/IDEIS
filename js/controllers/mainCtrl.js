/**

.______          ___   ____    ____  ___      .__   __.    .___  ___.  _______ .______        ___      .______       __  ___  __  
|   _  \        /   \  \   \  /   / /   \     |  \ |  |    |   \/   | |   ____||   _  \      /   \     |   _  \     |  |/  / |  | 
|  |_)  |      /  ^  \  \   \/   / /  ^  \    |   \|  |    |  \  /  | |  |__   |  |_)  |    /  ^  \    |  |_)  |    |  '  /  |  | 
|      /      /  /_\  \  \_    _/ /  /_\  \   |  . `  |    |  |\/|  | |   __|  |   _  <    /  /_\  \   |      /     |    <   |  | 
|  |\  \----./  _____  \   |  |  /  _____  \  |  |\   |    |  |  |  | |  |____ |  |_)  |  /  _____  \  |  |\  \----.|  .  \  |  | 
| _| `._____/__/     \__\  |__| /__/     \__\ |__| \__|    |__|  |__| |_______||______/  /__/     \__\ | _| `._____||__|\__\ |__| 
                                                                                                                                  
*/


app.controller("mainCtrl", function($scope, $http, $sce, varShared)
{
	if (sessionStorage.getItem('id') != null)
	{
		var nsm = new Audio("media/sounds/nsm.mp3");
		$scope.prenom = sessionStorage.getItem("prenom");


	    var retry = new Audio('media/sounds/yesYouCan.mp3');
	    var nbClickInfini = 0;
		$scope.ready = false;
		$scope.j = 0; // compteur de sous-catégorie
		$scope.score  = 0;
		varShared.setScore($scope.score);
		$scope.depose = true;
		$scope.reponseQuestion = [];
		$scope.list = null;
		$scope.nbClick = 0;
		$scope.saveProposition = [];
		$scope.tabMemory = [];
		$scope.challenge = 0;
		$scope.bgColor = "red";


		$scope.droppedObjects1 = [
			{name: 'Motivation', url: "media/themes/export_theme/motivation.png", id: 1},
			{name: "Confiance", url: "media/themes/export_theme/confiance.png", id: 2},
			{name: "Évolution Professionnelle", url: "media/themes/export_theme/promotion.png", id: 3},
			{name: "Ce n'est pas l'ecole", url: "media/themes/export_theme/pas_ecole.png", id: 4},
			{name: "Immersion en entreprise", url: "media/themes/export_theme/entreprise.png", id: 5},
			{name: "Contenu de la formation", url: "media/themes/export_theme/diplome.png", id: 6},
		];




		$scope.init = function()
		{

			$scope.droppedObjects1 = [
				{name: 'Motivation', url: "media/themes/export_theme/motivation.png", id: 1},
				{name: "Confiance", url: "media/themes/export_theme/confiance.png", id: 2},
				{name: "Évolution Professionnelle", url: "media/themes/export_theme/promotion.png", id: 3},
				{name: "Ce n'est pas l'ecole", url: "media/themes/export_theme/pas_ecole.png", id: 4},
				{name: "Immersion en entreprise", url: "media/themes/export_theme/entreprise.png", id: 5},
				{name: "Contenu de la formation", url: "media/themes/export_theme/diplome.png", id: 6},
			];
			$scope.droppedObjects2 = [];
			$scope.saveProposition = [];
			$scope.newList = [];
			$scope.newList2 = [];
			$scope.score = 0;
			varShared.setScore($scope.score);

			$scope.dropIsOk = false;
			$scope.nbPropositionIsOk = false;
			$scope.droppedObjects2NotNullIsOk = false;

			$scope.pygargue = false;

			$scope.dropIsOk = true;
		}

		$scope.scoreIncrement = function(id)
		{
			$scope.identifiant = 0;
			if (id == 1)
			{
				$scope.identifiant = this.realItem;
			} else if(id == 2)
			{
				$scope.identifiant = this.realItem2;
			}
			this.nbClick ++;
			if (this.nbClick % 2 == 0)
			{
				var indexProposition = $scope.saveProposition.indexOf($scope.identifiant);
				$scope.saveProposition.splice(indexProposition, 1);
				console.log($scope.saveProposition);
				$scope.score -= (id * 10);
				$scope.bgColor = "red";
				varShared.setScore($scope.score);
			} else
			{
				var indexProposition = $scope.saveProposition.indexOf($scope.identifiant);
				$scope.saveProposition.push($scope.identifiant);
				console.log($scope.saveProposition);
				$scope.score += (id * 10);
				$scope.bgColor = "blue";
				varShared.setScore($scope.score);
				if ($scope.score >= 10 && id == 1)
				{
					$scope.nbPropositionIsOk = true;
					$scope.dropIsOk = false;
				}
				else if($scope.score >= 10 && id == 2)
				{
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
			$scope.pygargue = false;
			$scope.ready2 = true;
			$scope.nbPropositionIsOk = false;
			$scope.nbPropositionIsOk2 = true;
			$scope.showReponse2 = false;
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

	        $scope.insertProposition = function(id)
	        {
	        	$scope.ready = false;
	        	$scope.nbPropositionIsOk = false;

	        	$scope.saveProposition.forEach(function(element)
	        	{
	        		$http.post('insert.php',
	        		{
	        			'content' : element,
	        			'idPersonne' : sessionStorage.getItem('id')
	        		})
	        		.then(function(response)
	        		{
	        		}, function(response)
	        		{
	        			console.error("Erreur ! " + response);
	        		});
	        	});

	        	if ($scope.score < 120)
	        	{
	        		$scope.gagneDesPoints = true;
	        		// memoryGame();
	        	} else
	        	{
	        		if (id != 2)
	        		{
	        			$scope.showReponse2 = true;
	        		}
	        		else
	        		{
	        			// INSERTION VIGNETTE ICI (TEST)
						if ($scope.score >= 10 && $scope.score < 50)
						{
							insertVignette("media/vignettes/1st_step.png");
						}
						else if ($scope.score >= 50 && $scope.score < 120)
						{
							insertVignette("media/vignettes/1st_step.png");
							insertVignette("media/vignettes/diplome.png");
						}
						else if ($scope.score >= 120 && $scope.score < 150)
						{
							insertVignette("media/vignettes/1st_step.png");
							insertVignette("media/vignettes/diplome.png");
							insertVignette("media/vignettes/travail.png");
							insertVignette("media/vignettes/argent.png");			
						}
						else if ($scope.score >= 150)
						{
							insertVignette("media/vignettes/1st_step.png");
							insertVignette("media/vignettes/diplome.png");
							insertVignette("media/vignettes/travail.png");
							insertVignette("media/vignettes/argent.png");
							insertVignette("media/vignettes/voiture.png");	
						}

						function insertVignette(idVignette)
						{
							$http.post( "insertVignette.php",
							{
								idPersonne : sessionStorage.getItem('id'),
								vignette : idVignette
							})
							.then(
								function(response)
								{
									console.log("Insertion vignette OK");
								}
							);
						}
	        			window.location.href = "#!/bienJoue";
	        		}
	        		
	        	}

	        	$scope.saveProposition = [];
	        }

	    $scope.showCard = false;


	    $scope.memoryGame = function()
	    {
	    	$scope.gagneDesPoints = false;
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
			$scope.memoryGame();
	    }

	    var nbClickMemory = 0;
	    $scope.hideCard = null;
	    var index1 = null;
	    $scope.scoreMemory = 0;
	    var saveFirstCard = null;
	    $scope.checkMemory = function(myIndex)
	    {
	    	nbClickMemory++;
	    	this.nbClick ++;
	    	if (this.nbClick >= 2)
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
		    			$scope.tabMemory = [];
						varShared.setScore($scope.score);
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
	    	
	    	$scope.eggList = [
	    		"oeuf1.png",
	    		"oeuf2.png",
	    		"oeuf3.png",
	    		"oeuf4.png",
	    		"oeuf5.png",
	    		"oeuf6.png",
	    		"oeuf7.png",
	    		"oeuf8.png"
	    	];

	    	$scope.egg = true;
	    	nbClickInfini ++;
	    	
	    	switch (nbClickInfini)
	    	{
	    		case 0:
	    		$scope.srcOeuf = $scope.eggList[0];
	    		break;

	    		case 1:
	    		$scope.srcOeuf = $scope.eggList[0];
	    		break;

	    		case 2:
	    		$scope.srcOeuf = $scope.eggList[1];
	    		break;

	    		case 4:
	    		$scope.srcOeuf = $scope.eggList[2];
	    		break;

	    		case 6:
	    		$scope.srcOeuf = $scope.eggList[3];
	    		break;

	    		case 8:
	    		$scope.srcOeuf = $scope.eggList[4];
	    		break;

	    		case 11:
	    		$scope.srcOeuf = $scope.eggList[5];
	    		break;

	    		case 13:
	    		$scope.srcOeuf = $scope.eggList[6];
	    		break;

	    		case 16:
	    		$scope.srcOeuf = $scope.eggList[7];
	    		break;

	    	}

	    	if (nbClickInfini == 3)
	    	{
	    		nsm.play();
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
	    		this.easterEgg = false;
	    		$scope.easterEgg1 = true;
	    		$scope.buttonInterro = true;
	    		//$scope.codeVideo = $sce.trustAsResourceUrl("https://www.youtube.com/embed/ffRUntstOdw?autoplay=1");
	    		break;

	    		case 2:
	    		this.easterEgg = false;
	    		$scope.easterEgg2 = true;
	    		$scope.buttonInterro = true;
	    		//$scope.codeVideo = $sce.trustAsResourceUrl("https://www.youtube.com/embed/l1zLNzVC_vw?autoplay=1");
	    		break;

	    		case 3:
	    		this.easterEgg = false;
	    		$scope.easterEgg3 = true;
	    		$scope.buttonInterro = true;
	    		//$scope.codeVideo = $sce.trustAsResourceUrl("https://www.youtube.com/embed/Hrja93QLYR8?start=66&autoplay=1");
	    		break;
	    	}
	    	$scope.score = 120;
	    	varShared.setScore($scope.score);
	    	$scope.showReponse2 = true;
	    	$scope.nbPropositionIsOk = false;
	    	$scope.easterEgg = false;
	    	//$scope.pygargue = true;
	    }

	    $scope.initInterro = function()
	    {
	    	$scope.buttonInterro = false;
	    	$scope.easterEgg1 = false;
	    	$scope.easterEgg2 = false;
	    	$scope.easterEgg3 = false;
	    	$scope.easterEgg = true;
	    }

	    $http.get("json.php")
	    .then(function(response)
	    {
	        $scope.list = response.data;
	    });		
	}
	else
	{
		window.location.href = "#!/disconnect";
	}
	
});