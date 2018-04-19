<?php 
$data = json_decode(file_get_contents("php://input"));



try {
	    $pdo = new PDO("mysql:host=localhost; charset=utf8; dbname=ideis", "root", "root");
	    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
catch(PDOException $e)
    {
    	echo "Connection failed: " . $e->getMessage();
    }

    $query = $pdo->prepare('INSERT INTO `vignette`(`ID_PERSONNE`,`LIB_VIGNETTE`) VALUES (?, ?)');
    $query->bindValue(1, $data->idPersonne);
    $query->bindValue(2, $data->vignette);
    $query->execute();



?>