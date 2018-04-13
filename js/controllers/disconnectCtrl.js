app.controller("disconnectCtrl", function()
{
	sessionStorage.removeItem("prenom");
	sessionStorage.removeItem("nom");
	sessionStorage.removeItem("id");
	console.log(sessionStorage.getItem('prenom'));
	window.location.href = "#!/";
});