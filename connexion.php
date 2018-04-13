<?php 
$data = json_decode(file_get_contents("php://input"));

$tryEmail = $data->monEmail;


try {
        $pdo = new PDO("mysql:host=localhost;dbname=ideis", "root", "root");
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
catch(PDOException $e)
    {
        echo "Connection failed: " . $e->getMessage();
    }

    $query = $pdo->prepare('SELECT * FROM personne WHERE personne.EMAIL = ?');
    $query->bindValue(1, $tryEmail);
    $query->execute();

    while ($data2 = $query->fetch())
    {
        echo json_encode($data2);
    }


?>
