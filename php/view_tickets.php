<?php
// Connect to the database
$db_host = 'localhost';
$db_user = 'username';
$db_pass = 'password';
$db_name = 'ticket_system';
$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

// Retrieve all the ticket data from the database
$sql = "SELECT * FROM tickets";
$result = mysqli;
?>