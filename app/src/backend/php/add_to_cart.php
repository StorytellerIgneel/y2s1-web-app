<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

// Allow requests from any origin
header("Access-Control-Allow-Origin: *");
// Allow certain HTTP methods
header("Access-Control-Allow-Methods: POST, OPTIONS");
// Allow certain headers
header("Access-Control-Allow-Headers: Content-Type");

session_start();
// Set session cookie path and domain for localhost
@ini_set('session.cookie_path', '/');
@ini_set('session.cookie_domain', 'localhost');

echo (session_id());
// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0); // return 200 for OPTIONS requests
}

// Get game details from POST request
$game_id = isset($_POST['game_id']) ? $_POST['game_id'] : null;

// Initialize cart if not already done
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = array();
}

// Add game to cart if it's not already there
if ($game_id && !in_array($game_id, $_SESSION['cart'])) {
    $_SESSION['cart'][] = $game_id;
}

// Print the current cart for debugging purposes
print_r($_SESSION['cart']);
?>
