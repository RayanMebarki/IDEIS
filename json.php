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

	$tab['immersionEntreprise'][] = "Travailler en france et a l'etranger";
	$tab['immersionEntreprise'][] = "Etre embauche a la fin";
	$tab['immersionEntreprise'][] = "Emploi durable";
	$tab['immersionEntreprise'][] = "Si ma boite ne fonctionne plus je pourrais retrouver du travail";

	$tab['pasEcole'][] = "J'ai l'impression d'etre comme en entreprise";
	$tab['pasEcole'][] = "Disponible a tout age";
	$tab['pasEcole'][] = "Ce n'est pas l'ecole";
	$tab['pasEcole'][] = "On a des formateurs pas des profs";

	$tab['contenuFormation'][] = "Avoir une double competence";
	$tab['contenuFormation'][] = "J'avais le d'experience dans mon pays mais reconnu en france";
	$tab['contenuFormation'][] = "Pouvoir entrer en qualification";
	$tab['contenuFormation'][] = "Les ateliers sont varies";

/*	$tab["immersionPro"]
	$tab["promotion"]
	$tab["immersion"]
	$tab["notEcole"]
	$tab["contenuFormation"]
*/

	echo json_encode($tab);
?>