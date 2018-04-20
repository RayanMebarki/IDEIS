/**

.______          ___   ____    ____  ___      .__   __.    .___  ___.  _______ .______        ___      .______       __  ___  __  
|   _  \        /   \  \   \  /   / /   \     |  \ |  |    |   \/   | |   ____||   _  \      /   \     |   _  \     |  |/  / |  | 
|  |_)  |      /  ^  \  \   \/   / /  ^  \    |   \|  |    |  \  /  | |  |__   |  |_)  |    /  ^  \    |  |_)  |    |  '  /  |  | 
|      /      /  /_\  \  \_    _/ /  /_\  \   |  . `  |    |  |\/|  | |   __|  |   _  <    /  /_\  \   |      /     |    <   |  | 
|  |\  \----./  _____  \   |  |  /  _____  \  |  |\   |    |  |  |  | |  |____ |  |_)  |  /  _____  \  |  |\  \----.|  .  \  |  | 
| _| `._____/__/     \__\  |__| /__/     \__\ |__| \__|    |__|  |__| |_______||______/  /__/     \__\ | _| `._____||__|\__\ |__| 
                                                                                                                                  
*/




app.controller('avatarCtrl', function($scope, $http, varShared)
{
	if (sessionStorage.getItem('id') != null)
	{
		$scope.scoreActuel = null;
		varShared.getScore()
		.then(function(score)
		{
			$scope.scoreActuel = score;
			//$scope.message = "Hello " + sessionStorage.getItem('prenom') + " ! Tu as " + scoreActuel + " point(s)";
		});
		


		$scope.corps = [
			{name: 'avatar1.png', id: 1},
			{name: "avatar2.png", id: 2},
			{name: "avatar3.png", id: 3},
			{name: "avatar4.png", id: 4}
		];


		$scope.tshirt = [
			{name: 'tshirtblue.png', id: 1},
			{name: "tshirtgreen.png", id: 2},
			{name: "tshirtgrey.png", id: 3},
			{name: "tshirtmidnight.png", id: 4},
			{name: "tshirtred.png", id: 5},
			{name: "tshirtyellow.png", id: 6},
			{name: 'poloblue.png', id: 1},
			{name: "pologreen.png", id: 2},
			{name: "pologrey.png", id: 3},
			{name: "polomidnight.png", id: 4},
			{name: "polored.png", id: 5},
			{name: "poloyellow.png", id: 6}
		];

		$scope.cheveux = [
			{name: 'cheveux1blond.png', id: 1},
			{name: "cheveux1brun.png", id: 2},
			{name: "cheveux1noir.png", id: 3},
			{name: "cheveux1roux.png", id: 4},

			{name: 'cheveux2blond.png', id: 5},
			{name: "cheveux2brun.png", id: 6},
			{name: "cheveux2noir.png", id: 7},
			{name: "cheveux2roux.png", id: 8},

			{name: 'cheveux3blond.png', id: 9},
			{name: "cheveux3brun.png", id: 10},
			{name: "cheveux3noir.png", id: 11},
			{name: "cheveux3roux.png", id: 12},

			{name: 'cheveux4blond.png', id: 13},
			{name: "cheveux4brun.png", id: 14},
			{name: "cheveux4noir.png", id: 15},
			{name: "cheveux4roux.png", id: 16},

			{name: 'cheveux5blond.png', id: 17},
			{name: "cheveux5brun.png", id: 19},
			{name: "cheveux5noir.png", id: 20},
			{name: "cheveux5roux.png", id: 21},


			{name: 'cheveux1blondF.png', id: 22},
			{name: "cheveux1brunF.png", id: 23},
			{name: "cheveux1noirF.png", id: 24},
			{name: "cheveux1rouxF.png", id: 25},

			{name: 'cheveux2blondF.png', id: 26},
			{name: "cheveux2brunF.png", id: 27},
			{name: "cheveux2noirF.png", id: 28},
			{name: "cheveux2rouxF.png", id: 29},

			{name: 'cheveux3blondF.png', id: 30},
			{name: "cheveux3brunF.png", id: 31},
			{name: "cheveux3noirF.png", id: 11},
			{name: "cheveux3rouxF.png", id: 12},

			{name: 'cheveux4blondF.png', id: 13},
			{name: "cheveux4brunF.png", id: 14},
			{name: "cheveux4noirF.png", id: 15},
			{name: "cheveux4rouxF.png", id: 16},

			{name: 'cheveux5blondF.png', id: 17},
			{name: "cheveux5brunF.png", id: 19},
			{name: "cheveux5noirF.png", id: 20},
			{name: "cheveux5rouxF.png", id: 21},

			{name : "bonnet_noel_blond_H.png"},
			{name : "bonnet_noel_brun_H.png"},
			{name : "bonnet_noel_noir_H.png"},
			{name : "bonnet_noel_roux_H.png"},

			{name : "casquette_noir_blond_H.png"},
			{name : "casquette_noir_brun_H.png"},
			{name : "casquette_noir_noir_H.png"},
			{name : "casquette_noir_roux_H.png"},

			{name : "casquette_rouge_blond_H.png"},
			{name : "casquette_rouge_brun_H.png"},
			{name : "casquette_rouge_noir_H.png"},
			{name : "casquette_rouge_roux_H.png"},

			{name : "chapeau_blond_H.png"},
			{name : "chapeau_brun_H.png"},
			{name : "chapeau_noir_H.png"},
			{name : "chapeau_roux_H.png"},

			{name : "chapeau_pirate_blond_H.png"},
			{name : "chapeau_pirate_brun_H.png"},
			{name : "chapeau_pirate_noir_H.png"},
			{name : "chapeau_pirate_roux_H.png"},

			{name : "bonnet_cheveux1_blond_F.png"},
			{name : "bonnet_cheveux1_brun_F.png"},
			{name : "bonnet_cheveux1_noir_F.png"},
			{name : "bonnet_cheveux1_roux_F.png"},

			{name : "bonnet_meche_blond_F.png"},
			{name : "bonnet_meche_brun_F.png"},
			{name : "bonnet_meche_noir_F.png"},
			{name : "bonnet_meche_roux_F.png"},

			{name : "bonnet_noel_cheveux_blond_F.png"},
			{name : "bonnet_noel_cheveux_brun_F.png"},
			{name : "bonnet_noel_cheveux_noir_F.png"},
			{name : "bonnet_noel_cheveux_roux_F.png"},

			{name : "bonnet_noel_frise_blond_F.png"},
			{name : "bonnet_noel_frise_brun_F.png"},
			{name : "bonnet_noel_frise_noir_F.png"},
			{name : "bonnet_noel_frise_roux_F.png"},

			{name : "bonnet_noel_nattes_blond_F.png"},
			{name : "bonnet_noel_nattes_brun_F.png"},
			{name : "bonnet_noel_nattes_noir_F.png"},
			{name : "bonnet_noel_nattes_roux_F.png"},


			{name : "casquette_cheveux1_blond_F.png"},
			{name : "casquette_cheveux1_brun_F.png"},
			{name : "casquette_cheveux1_noir_F.png"},
			{name : "casquette_cheveux1_roux_F.png"},

			{name : "casquette_frise_blond_F.png"},
			{name : "casquette_frise_brun_F.png"},
			{name : "casquette_frise_noir_F.png"},
			{name : "casquette_frise_roux_F.png"},

			{name : "casquette_meche_blond_F.png"},
			{name : "casquette_meche_brun_F.png"},
			{name : "casquette_meche_noir_F.png"},
			{name : "casquette_meche_roux_F.png"},

			{name : "casquette_nattes_blond_F.png"},
			{name : "casquette_nattes_brun_F.png"},
			{name : "casquette_nattes_noir_F.png"},
			{name : "casquette_nattes_roux_F.png"},

			{name : "casquette_cheveux_long_blond_F.png"},
			{name : "casquette_cheveux_long_brun_F.png"},
			{name : "casquette_cheveux_long_noir_F.png"},
			{name : "casquette_cheveux_long_roux_F.png"},

			{name : "casquette_cheveux_long_blond_F.png"},
			{name : "casquette_cheveux_long_brun_F.png"},
			{name : "casquette_cheveux_long_noir_F.png"},
			{name : "casquette_cheveux_long_roux_F.png"},

			{name : "casquette_noir_cheveux_long_blond_F.png"},
			{name : "casquette_noir_cheveux_long_brun_F.png"},
			{name : "casquette_noir_cheveux_long_noir_F.png"},
			{name : "casquette_noir_cheveux_long_roux_F.png"},

			{name : "casquette_cheveux1_blond_F.png"},
			{name : "casquette_cheveux1_brun_F.png"},
			{name : "casquette_cheveux1_noir_F.png"},
			{name : "casquette_cheveux1_roux_F.png"},

			{name : "bonnet_cheveux1_blond_F.png"},
			{name : "bonnet_cheveux1_brun_F.png"},
			{name : "bonnet_cheveux1_noir_F.png"},
			{name : "bonnet_cheveux1_roux_F.png"},

			{name : "casquette_noir_frise_blond_F.png"},
			{name : "casquette_noir_frise_brun_F.png"},
			{name : "casquette_noir_frise_noir_F.png"},
			{name : "casquette_noir_frise_roux_F.png"},

			{name : "casquette_noir_meche_blond_F.png"},
			{name : "casquette_noir_meche_brun_F.png"},
			{name : "casquette_noir_meche_noir_F.png"},
			{name : "casquette_noir_meche_roux_F.png"},

			{name : "casquette_noir_nattes_brun_F.png"},
			{name : "casquette_noir_nattes_noir_F.png"},
			{name : "casquette_noir_nattes_roux_F.png"},


			{name : "chapeau_meche_blond_F.png"},
			{name : "chapeau_meche_brun_F.png"},
			{name : "chapeau_meche_noir_F.png"},
			{name : "chapeau_meche_roux_F.png"},

			{name : "chapeau_cheveux_long_blond_F.png"},
			{name : "chapeau_cheveux_long_brun_F.png"},
			{name : "chapeau_cheveux_long_noir_F.png"},
			{name : "chapeau_cheveux_long_roux_F.png"},

			{name : "chapeau_frise_blond_F.png"},
			{name : "chapeau_frise_brun_F.png"},
			{name : "chapeau_frise_noir_F.png"},
			{name : "chapeau_frise_roux_F.png"},

			{name : "chapeau_meche_blond_F.png"},
			{name : "chapeau_meche_brun_F.png"},
			{name : "chapeau_meche_noir_F.png"},
			{name : "chapeau_meche_roux_F.png"},

			{name : "chapeau_nattes_blond_F.png"},
			{name : "chapeau_nattes_brun_F.png"},
			{name : "chapeau_nattes_noir_F.png"},
			{name : "chapeau_nattes_roux_F.png"},


			{name : "chapeau_pirate_meche_blond_F.png"},
			{name : "chapeau_pirate_meche_brun_F.png"},
			{name : "chapeau_pirate_meche_noir_F.png"},
			{name : "chapeau_pirate_meche_roux_F.png"},

			{name : "chapeau_pirate_cheveux_long_blond_F.png"},
			{name : "chapeau_pirate_cheveux_long_brun_F.png"},
			{name : "chapeau_pirate_cheveux_long_noir_F.png"},
			{name : "chapeau_pirate_cheveux_long_roux_F.png"},

			{name : "chapeau_pirate_frise_blond_F.png"},
			{name : "chapeau_pirate_frise_brun_F.png"},
			{name : "chapeau_pirate_frise_noir_F.png"},
			{name : "chapeau_pirate_frise_roux_F.png"},

			{name : "chapeau_pirate_meche_blond_F.png"},
			{name : "chapeau_pirate_meche_brun_F.png"},
			{name : "chapeau_pirate_meche_noir_F.png"},
			{name : "chapeau_pirate_meche_roux_F.png"},

			{name : "chapeau_pirate_blond_F.png"},
			{name : "chapeau_pirate_brun_F.png"},
			{name : "chapeau_pirate_noir_F.png"},
			{name : "chapeau_pirate_roux_F.png"},



		];

		$scope.barbe = [
			{name: 'barbe1blond.png'},
			{name: "barbe1brun.png"},
			{name: "barbe1noir.png"},
			{name: "barbe1roux.png"},

			{name: 'barbe2blond.png'},
			{name: "barbe2brun.png"},
			{name: "barbe2noir.png"},
			{name: "barbe2roux.png"},

			{name: 'moustache1blond.png'},
			{name: "moustache1brun.png"},
			{name: "moustache1noir.png"},
			{name: "moustache1roux.png"},
		];



		$scope.positionCorps = 0;
		$scope.positionCheveux = 0;
		$scope.positionTshirt = 0;
		$scope.positionBarbe = 5;

		$scope.switch = function(direction, partie)
		{
			if (partie == 0)
			{
				if (direction == 0)
				{
					if ($scope.positionCorps > 0)
					{
						$scope.positionCorps--; 
					}
					else
					{
						$scope.positionCorps = ($scope.corps.length - 1);
					}
				}
				else if (direction == 1)
				{
					if ($scope.positionCorps < $scope.corps.length -1)
					{
						$scope.positionCorps++;
					}
					else
					{
						$scope.positionCorps = 0;
					}
				}
				else
				{
					console.error("erreur !");
				}
			}
			else if (partie == 1)
			{
				if (direction == 0)
				{
					if ($scope.positionCheveux > 0)
					{
						$scope.positionCheveux--; 
					}
					else
					{
						$scope.positionCheveux = ($scope.cheveux.length - 1);
					}
				}
				else if (direction == 1)
				{
					if ($scope.positionCheveux < $scope.cheveux.length -1)
					{
						$scope.positionCheveux++;
					}
					else
					{
						$scope.positionCheveux = 0;
					}
				}
				else
				{
					console.error("erreur !");
				}
			}

			else if (partie == 2)
			{
				if (direction == 0)
				{
					if ($scope.positionTshirt > 0)
					{
						$scope.positionTshirt--; 
					}
					else
					{
						$scope.positionTshirt = ($scope.tshirt.length - 1);
					}
				}
				else if (direction == 1)
				{
					if ($scope.positionTshirt < $scope.tshirt.length -1)
					{
						$scope.positionTshirt++;
					}
					else
					{
						$scope.positionTshirt = 0;
					}
				}
				else
				{
					console.error("erreur !");
				}
			}

			else if (partie == 3)
			{
				if (direction == 0)
				{
					if ($scope.positionbarbe > 0)
					{
						$scope.positionbarbe--; 
					}
					else
					{
						$scope.positionbarbe = ($scope.barbe.length - 1);
					}
				}
				else if (direction == 1)
				{
					if ($scope.positionbarbe < $scope.barbe.length -1)
					{
						$scope.positionbarbe++;
					}
					else
					{
						$scope.positionbarbe = 0;
					}
				}
				else
				{
					console.error("erreur !");
				}
			}
		}


		$scope.submitAvatar = function()
		{
			varShared.setCorps("media/avatar/export_avatar/" + $scope.corps[$scope.positionCorps].name);
			varShared.setCheveux("media/avatar/export_avatar/cheveux/" + $scope.cheveux[$scope.positionCheveux].name);
			varShared.setTshirt("media/avatar/export_avatar/Tshirt/" + $scope.tshirt[$scope.positionTshirt].name);
			varShared.setBarbe("media/avatar/export_avatar/barbes/" + $scope.barbe[$scope.positionbarbe].name);

			$tabAvatar = [
				varShared.getCorps(),
				varShared.getCheveux(),
				varShared.getTshirt(),
				varShared.getBarbe()
			];

			$tabAvatar.forEach(function(partieDuCorps)
			{
				$http.post("createAvatar.php",
				{
					"partieDuCorps" : partieDuCorps,
					"idPersonne" : sessionStorage.getItem('id')
				})
				.then(function(response)
				{
					console.log('insert Done  : ' + partieDuCorps);

				});
			});
			window.location.href = "#!/questionnaire";
		}
	} else
	{
		window.location.href = "#!/disconnect";
	}

});