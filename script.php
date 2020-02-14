<?php
include "connetBD.php";


    switch ($_GET['action'])
        {
            case "affich" :
                $stmt2 = "SELECT pseudo,commentaire FROM commentaires where 1";
                $result = $conn->query($stmt2);

                $arr= array();
                while($tab=$result->fetch_assoc())
                {
                    $arr[]= $tab;
                }
                echo json_encode($arr,JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PARTIAL_OUTPUT_ON_ERROR);
                break;

            case "ajout":
                if (isset($_GET["pseudo"]) && isset($_GET["com"]))
                {
                    $pseudo = $_GET["pseudo"];
                    $coms = $_GET["com"];

                    $stmt = 'INSERT INTO commentaires(pseudo,commentaire) VALUES ("'.$pseudo.'", "'.$coms.'")';
                    $result = $conn->query($stmt);

                    if(!empty($result))
                    {
                        $array=array();
                        while($tab=$result->fetch_assoc())
                        {
                            $array[]=$tab;
                        }
                        echo json_encode($array,JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PARTIAL_OUTPUT_ON_ERROR);
                    }

                }
                break;
        }


















