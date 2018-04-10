<?php 
$data = json_decode(file_get_contents("php://input"));

$content = $data->content;


try {
	    $pdo = new PDO("mysql:host=localhost;dbname=ideis", "root", "root");
	    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
catch(PDOException $e)
    {
    	echo "Connection failed: " . $e->getMessage();
    }

    $query = $pdo->prepare('INSERT INTO `proposition`(`ID_PERSONNE`,`LIB_PROPOSITION`) VALUES (1, ?)');
    $query->bindValue(1, $content);
    $query->execute();



?>