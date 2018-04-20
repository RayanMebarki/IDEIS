app.service("varShared", function($http, $q)
{
	var score = 0;
	var corps = "";
	var cheveux = "";
	var barbe = "";
	var tshirt = "";

	this.getScore = function()
	{
		var deffered = $q.defer();
		$http.post('getScore.php',
		{
			'idPersonne' : sessionStorage.getItem('id')
		})
		.then(function(response)
		{
			deffered.resolve(response.data);
		});
		return deffered.promise;
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