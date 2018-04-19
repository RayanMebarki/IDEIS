app.service("varShared", function($http)
{
	var score = 0;
	var corps = "";
	var cheveux = "";
	var barbe = "";
	var tshirt = "";

	this.getScore = function()
	{
		return score;
	}
	this.setScore = function(newScore)
	{
		score = newScore;
		$http.post('updateScore.php',
		{
			"score" : score,
			'idPersonne' : sessionStorage.getItem('id')
		}).then(function(response)
		{
			console.log(response.data);
		}, function(error)
		{
			console.error(error);
		});

		switch(score)
		{
			case 10:
			insertVignette("media/vignettes/1st_step.png");
			break;

			case 50:
			insertVignette("media/vignettes/diplome.png");
			break;

			case 120:
			insertVignette("media/vignettes/travail.png");
			insertVignette("media/vignettes/argent.png");
			break;

			case 150:
			insertVignette("media/vignettes/voiture.png");
			break;
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
	}


	this.getCorps = function()
	{
		return corps;
	}
	this.setCorps = function(newCorps)
	{
		corps = newCorps
	}

	this.getCheveux = function()
	{
		return cheveux;
	}
	this.setCheveux = function(newCheveux)
	{
		cheveux = newCheveux;
	}

	this.getTshirt = function()
	{
		return tshirt;
	}
	this.setTshirt = function(newTshirt)
	{
		tshirt = newTshirt;
	}

	this.getBarbe = function()
	{
		return barbe;
	}
	this.setBarbe = function(newBarbe)
	{
		barbe = newBarbe;
	}
});