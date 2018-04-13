<?php 
$data = json_decode(file_get_contents("php://input"));
// $bname = mysql_real_escape_string($data->bname);
// $bauthor = mysql_real_escape_string($data->bphone);

$email = $data->email;
$password = $data->password;



try {
	    $pdo = new PDO("mysql:host=localhost;dbname=ideis", "root", "root");
	    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
catch(PDOException $e)
    {
    	echo "Connection failed: " . $e->getMessage();
    }

    $query = $pdo->prepare('INSERT INTO `personne`(`EMAIL`,`PASSWORD`) VALUES (?, ?)');
    $query->bindValue(1, $email);
    $query->bindValue(2, $password);
    $query->execute();


?>
