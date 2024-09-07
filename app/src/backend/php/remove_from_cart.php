<?php
session_start();
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



function removeFromCart($game_id) {
    if (isset($_SESSION['cart'])) {
        foreach ($_SESSION['cart'] as $key => $item) {
            if ($item['game_id'] == $game_id) {
                unset($_SESSION['cart'][$key]);
                break;
            }
        }

        // Re-index the array to prevent gaps in the keys
        $_SESSION['cart'] = array_values($_SESSION['cart']);
    }
}

// Get game details from POST request
$game_id = $_POST['game_id'];

removeFromCart($game_id);

print_r($_SESSION['cart']);
