/**

.______          ___   ____    ____  ___      .__   __.    .___  ___.  _______ .______        ___      .______       __  ___  __  
|   _  \        /   \  \   \  /   / /   \     |  \ |  |    |   \/   | |   ____||   _  \      /   \     |   _  \     |  |/  / |  | 
|  |_)  |      /  ^  \  \   \/   / /  ^  \    |   \|  |    |  \  /  | |  |__   |  |_)  |    /  ^  \    |  |_)  |    |  '  /  |  | 
|      /      /  /_\  \  \_    _/ /  /_\  \   |  . `  |    |  |\/|  | |   __|  |   _  <    /  /_\  \   |      /     |    <   |  | 
|  |\  \----./  _____  \   |  |  /  _____  \  |  |\   |    |  |  |  | |  |____ |  |_)  |  /  _____  \  |  |\  \----.|  .  \  |  | 
| _| `._____/__/     \__\  |__| /__/     \__\ |__| \__|    |__|  |__| |_______||______/  /__/     \__\ | _| `._____||__|\__\ |__| 
                                                                                                                                  
*/

app.controller('accueilCtrl', function($scope, $http)
{
	$scope.message = "Hello World";

	$scope.inscription = function()
	{
		if (this.password == this.password2)
		{
			console.log(this.email);
			console.log(this.password);
			console.log(this.password2);

    		$http.post('register.php',
    		{
    			'email' : this.email,
    			'password' : this.password
    		})
    		.then(function(response)
    		{
    			alert('Inscription réussie');
    		}, function(response)
    		{
    			console.error("Erreur ! " + response);
    		});
		} else
		{
			alert("Les mots de passe ne sont pas les mêmes");
		}
	}


	$scope.connexion = function()
	{
		var infoEmail = "";
		var infoPasswd = "";

		var inputEmail = this.emailConnect;
		var inputPassword = this.passwordConnect;
		$scope.infos = null;

		$http.post('connexion.php',
		{
			'monEmail' : this.emailConnect
		})
		.then(function(response)
		{
			infoEmail = response.data.EMAIL;
			infoPasswd = response.data.PASSWORD;
			if (inputEmail == infoEmail && inputPassword == infoPasswd)
			{
				sessionStorage.setItem("id", response.data.ID_PERSONNE);
				sessionStorage.setItem('nom', response.data.NOM_PERSONNE);
				sessionStorage.setItem('prenom', response.data.PRENOM_PERSONNE);
				window.location.href = "#!/avatar";
			} else
			{
				console.error('Erreur login et/ou mot de passe');
			}
		}, function(response)
		{
			console.error("Erreur ! " + response);
		});
	}

});