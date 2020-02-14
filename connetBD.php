<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "module commentaire";

$conn = new Mysqli($servername, $username, $password);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    $conn->select_db($dbname);
}

