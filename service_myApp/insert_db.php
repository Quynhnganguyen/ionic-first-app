<?php

/*

 Requête HTTP Post 

 */



// tableau de réponse JSON (array)

$reponse = array();



// tester si les champs sont valides

if (isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['adresse']) && isset($_POST['email'])&& isset($_POST['password'])) {



    $valeur_nom = $_POST['nom'];

    $valeur_prenom = $_POST['prenom'];

    $valeur_adresse = $_POST['adresse'];

	$valeur_email = $_POST['email'];
	
	$valeur_pass = $_POST['password'];

    // inclure la classe de connexion

    require_once __DIR__ . '/connexion_db.php';



    // connxion à la base

    $db = new CONNEXION_DB ();



    // requéte pour insérer les données

    $resultat = mysql_query("INSERT INTO inscription(nom, prenom, adresse, email, pass) VALUES('$valeur_nom', '$valeur_prenom', '$valeur_adresse', '$valeur_email', '$valeur_pass')");



    // tester si les données sont bien insérées

    if ($resultat) {

        // Données bien insérées

        $reponse["success"] = 1;

        $reponse["message"] = "Donnees bien inserees";



       // afficher  la reponse JSON

        echo json_encode($reponse);

    } else {

        // erreur d'insertion

        $reponse["success"] = 0;

        $reponse["message"] = "Oops! Erreur d'inscription.";



      // afficher  la réponse JSON

        echo json_encode($reponse);

    }

} else {

    // Champ(s) manquant(s)

    $reponse["success"] = 0;

    $reponse["message"] = "Champ(s) manquant(s)";



    // afficher  la réponse JSON

    echo json_encode($reponse);

}



?>


