<?php 
$data = json_decode(file_get_contents("php://input"));

$score = $data->score;
$idPersonne = $data->idPersonne;


try {
	    $pdo = new PDO("mysql:host=localhost; charset=utf8; dbname=ideis", "root", "root");
	    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
catch(PDOException $e)
    {
    	echo "Connection failed: " . $e->getMessage();
    }

    $query = $pdo->prepare('UPDATE personne SET SCORE = ? WHERE personne.ID_PERSONNE = ?');
    $query->bindValue(1, $score);
    $query->bindValue(2, $idPersonne);
    try
    {
        $query->execute();    
    } catch (PDOException $e)
    {
        echo $e;
    }
    



?>