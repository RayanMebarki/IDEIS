<?php 
$data = json_decode(file_get_contents("php://input"));
// $bname = mysql_real_escape_string($data->bname);
// $bauthor = mysql_real_escape_string($data->bphone);

$email = mysql_escape_string(htmlspecialchars($data->email));
$password = mysql_escape_string(htmlspecialchars($data->password)); 


try {
	    $pdo = new PDO("mysql:host=localhost; charset=utf8; dbname=ideis", "root", "root");
	    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
catch(PDOException $e)
    {
    	echo "Connection failed: " . $e->getMessage();
    }
    
$query = $pdo->prepare('INSERT INTO `personne`(`NOM_PERSONNE`, `PRENOM_PERSONNE`, `EMAIL`,`PASSWORD`, `SCORE`) VALUES (?, ?, ?, ?, ?)');
$query->bindValue(1, $data->nom);
$query->bindValue(2, $data->prenom);
$query->bindValue(3, $email);
$query->bindValue(4, $password);
$query->bindValue(5, 0);
$query->execute();
?>

