<?php

	$tab = array();
	$tab['motivation'][] = "Partir en vacances";
	$tab['motivation'][] = "Ne pas rester sans rien faire";
	$tab['motivation'][] = "Avoir plus de choix";
	$tab['motivation'][] = "Ne pas se mettre de frein";

	$tab['confiance'][] = "Je suis capable de tout faire et d'aller au bout de mon projet";
	$tab['confiance'][] = utf8_encode("J'ai ma place dans la societe");
	$tab['confiance'][] = "Rencontrer des gens";
	$tab['confiance'][] = "La bonne ambiance";

	$tab['evolutionPro'][] = "Une meilleure paie";
	$tab['evolutionPro'][] = "Ouvrir ma boite";
	$tab['evolutionPro'][] = "Avoir une qualification / diplome plus eleve";
	$tab['evolutionPro'][] = "Poste a responsabilite";

/*	$tab["immersionPro"]
	$tab["promotion"]
	$tab["immersion"]
	$tab["notEcole"]
	$tab["contenuFormation"]
*/

	echo json_encode($tab);
?>