<!-- php file that links to a database with generic credentials (username "username, password "password" etc) and writes to the table "tickets" which takes "id varchar(7), adults int(2), kids int(2)" using information from a form with 3 inputs -->
<!-- this is a SAMPLE file to kinda show how it works -->
<?php
// put real credientials here
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "tickets";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// this takes the information from the form and writes it to the database. You would change the action attribute of the form to "ticketRegister.php" and it would take the values from the elements with the ids "id" "adults" and "kids" and write them to the database in the table "tickets"
$sql = "INSERT INTO tickets (id, adults, kids)VALUES ('$_POST[id]', '$_POST[adults]', '$_POST[kids]')";


?>