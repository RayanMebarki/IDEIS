app.service("varShared", function()
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