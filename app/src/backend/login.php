<?php
echo "Hello, PHP is working!";

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
    echo "gay";
    $name = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    echo $name;
    
    if (!empty($name) && !empty($email) && !empty($password)){
        
        $dbHost = 'localhost';
        $dbUsername = 'root';
        $dbPassword = 'teoH0628$$$$';
        $dbName = 'wad_assignment';
        
        // Create connection
        $conn = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);
        if (!$conn) {
            die('Could not connect to the database: ' . mysqli_connect_error());
        } else {
            echo 'Connection successful!';
        }
        $sql = "INSERT INTO users(username, email, password) VALUES('$name', '$email', '$password')";
        $res = mysqli_query($conn, $sql);
        if ($res){
            echo "Success";
        }else{
            echo "Error: ". $sql. "<br>". mysqli_error($conn);
        }
        mysqli_close($conn);

        if (mail($to, $subject, $body, $headers))
            echo json_encode(["success" => true, "message" => "message sent successfully"]);
        else
            echo json_encode(['success' => false, 'error' => 'Failed to send email.']);
    }
    else
        echo json_encode(['success' => false, 'error' => 'All fields are required.']);
}
else
    echo json_encode(["success" => false, 'error' => 'All fields are required.']);