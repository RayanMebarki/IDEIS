$(document).ready(function()
{
	$('div[class^="jdg"]').click(function()
	{
		$(this).text("<p>Toto</p>");

		$(this).click(function()
		{
			$(this).text('<img src="media/img/interrogation.png" ng-if="easterEgg"');
		});
	});
});