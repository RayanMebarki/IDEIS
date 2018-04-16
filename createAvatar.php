<?php 
$data = json_decode(file_get_contents("php://input"));

$content = $data->partieDuCorps;
$id = $data->idPersonne;


try {
	    $pdo = new PDO("mysql:host=localhost;dbname=ideis", "root", "root");
	    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
catch(PDOException $e)
    {
    	echo "Connection failed: " . $e->getMessage();
    }

    $query = $pdo->prepare('INSERT INTO avatar(ID_PERSONNE, LIB_PARTIE) VALUES (?, ?)');
    $query->bindValue(1, $id);
    $query->bindValue(2, $content);
    try
    {
        $query->execute();    
    } catch (PDOException $e)
    {
        echo $e;
    }
    



?>