<?php 
$data = json_decode(file_get_contents("php://input"));

$content = $data->content;
$id = $data->idPersonne;


try {
	    $pdo = new PDO("mysql:host=localhost; charset=utf8; dbname=ideis", "root", "root");
	    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
catch(PDOException $e)
    {
    	echo "Connection failed: " . $e->getMessage();
    }

    $query = $pdo->prepare('INSERT INTO `proposition`(`ID_PERSONNE`,`LIB_PROPOSITION`) VALUES (?, ?)');
    $query->bindValue(1, $id);
    $query->bindValue(2, $content);
    $query->execute();



?>