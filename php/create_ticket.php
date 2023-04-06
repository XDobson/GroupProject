<?php
// Connect to the database
$db_host = 'localhost';
$db_user = 'username';
$db_pass = 'password';
$db_name = 'ticket_system';
$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

// Get the ticket data from the form
$adults = mysqli_real_escape_string($conn, $_POST['adults']);
$children = mysqli_real_escape_string($conn, $_POST['children']);
$ticket_id = mysqli_real_escape_string($conn, $_POST['ticket_id']);
$date = mysqli_real_escape_string($conn, $_POST['date']);

// Insert the ticket data into the database
$sql = "INSERT INTO tickets (adults, children, ticket_id, date) VALUES ('$adults', '$children', '$ticket_id', '$date')";
mysqli_query($conn, $sql);

// Redirect the user back to the main page
header('Location: index.php');
exit;
?>