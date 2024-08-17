<?php
//DB config
$dbHost = '';
$dbUsername = 'admin';
$dbPassword = 'teoH0628$$$$';
$dbName = '';

//create db connection
$conn = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);

if (!$conn)
    die("Could not connect to db".mysqli_connect_error());
else
    echo "Connected to db";

mysqli_close(($conn));
?>
