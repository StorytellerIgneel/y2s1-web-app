<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "WAD_ASSIGNMENT";

// Create a new connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to fetch games
$sql = "SELECT * FROM games";
$result = $conn->query($sql);

$games = array();

if ($result) {
    if ($result->num_rows > 0) {
        // Fetch each row and add to the games array
        while ($row = $result->fetch_assoc()) {
            $games[] = $row;
        }
    }
} else {
    // Log SQL error
    error_log("SQL error: " . $conn->error);
}

// Close the database connection
$conn->close();

// Set content type to JSON and output the data
header('Content-Type: application/json');

echo json_encode($games);
?>
