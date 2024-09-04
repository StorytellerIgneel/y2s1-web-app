<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Allow requests from any origin
header("Access-Control-Allow-Origin: *");
// Allow certain HTTP methods
header("Access-Control-Allow-Methods: POST, OPTIONS");
// Allow certain headers
header("Access-Control-Allow-Headers: Content-Type");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
  }
    
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $searchString = $_POST["searchGame"];
   // echo($name);
        
    $dbHost = 'localhost';
    $dbUsername = 'root';
    $dbPassword = 'teoH0628$$$$';
    $dbName = 'wad_assignment';
    
    // Create connection
    $conn = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);
    // if (!$conn)
    //     die('Could not connect to the database: ' . mysqli_connect_error());
    // else
    //     echo 'Connection successful!';
    $sql = "SELECT title, img_src, price FROM games WHERE title LIKE '%$searchString%'";

    $res = mysqli_query($conn, $sql);
    if ($res){
        if (mysqli_num_rows($res) > 0){ //check num of rows returned 
            $games = []; // Initialize an empty array to hold the games

            while ($row = mysqli_fetch_assoc($res)) {
                // Each row is an associative array representing a single game
                $games[] = [
                    'title' => $row['title'],
                    'img_src' => $row['img_src'],
                    'price' => $row['price']
                ];
            }
            echo json_encode(['success' => false, 'games' => $games]);
        }
        else
            echo json_encode(['success' => false, 'error' => 'no games found']);
    }
    mysqli_close($conn);
}
else
    echo json_encode(['success' => false, 'error' => 'All fields are required.']);