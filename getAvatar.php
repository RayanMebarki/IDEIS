<?php 
$data = json_decode(file_get_contents("php://input"));

$id = $data->idPersonne;
$dataArray = array();



try {
	    $pdo = new PDO("mysql:host=localhost; charset=utf8; dbname=ideis", "root", "root");
	    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
catch(PDOException $e)
    {
    	echo "Connection failed: " . $e->getMessage();
    }

    $query = $pdo->prepare('
        SELECT LIB_PARTIE
        FROM avatar
        WHERE avatar.ID_PERSONNE = ?
    ');
    $query->bindValue(1, $id);

    try
    {
        $query->execute();

        while ($ajaxData = $query->fetch())
        {
            $dataArray[]  = $ajaxData;
        }
        echo json_encode($dataArray);
    } catch (PDOException $e)
    {
        echo $e;
    }
    



?>