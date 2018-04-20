<?php 
$data = json_decode(file_get_contents("php://input"));

$id = $data->idPersonne;


try {
	    $pdo = new PDO("mysql:host=localhost; charset=utf8; dbname=ideis", "root", "root");
	    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
catch(PDOException $e)
    {
    	echo "Connection failed: " . $e->getMessage();
    }

    $query = $pdo->prepare('
        SELECT SCORE
        FROM personne
        WHERE personne.ID_PERSONNE = ?
    ');
    $query->bindValue(1, $id);

    try
    {
        $query->execute();

        while ($donnees = $query->fetch())
        {
            $myScore = $donnees['SCORE'];
        }

        echo $myScore;

    } catch (PDOException $e)
    {
        echo $e;
    }
    



?>