<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "WAD_ASSIGNMENT";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to fetch 5 games (fixed selection)
$sql = "SELECT game_id, title, img_src FROM games ORDER BY game_id ASC LIMIT 5";
$result = $conn->query($sql);

$games = [];

if ($result->num_rows > 0) {
    // Fetch all games into an array
    while($row = $result->fetch_assoc()) {
        $games[] = [
            'game_id' => $row['game_id'],
            'title' => $row['title'],
            'img_src' => $row['img_src']
        ];
    }
}

// Return JSON response
header('Content-Type: application/json');
echo json_encode(['games' => $games]);

$conn->close();
?>