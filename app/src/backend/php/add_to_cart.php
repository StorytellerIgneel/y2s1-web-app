<?php
session_start();

// Assuming you get item details from POST request
$game_id = $_POST['game_id'];

// Initialize cart if not already done
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = array();
}

// Get game details from POST request
$game_id = $_POST['game_id'];

// Initialize cart if not already done
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = array();
}

// Add game to cart
if (!in_array($game_id, $_SESSION['cart'])) {
    $_SESSION['cart'][] = $game_id;
}