<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ticketinfo1";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $firstname = mysqli_real_escape_string($conn, $_POST['name']);
    $lastname = mysqli_real_escape_string($conn, $_POST['lname']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    //remove all non-numeric characters from phone number
    $phone = preg_replace("/[^0-9]/", "", $_POST['phone']);
    
    // insert into table "customer_info"
    $sql = "INSERT INTO customer_info (first_name, last_name, email, phone) 
    VALUES ('$firstname', '$lastname', '$email', '$phone')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    }
    else {
        echo "Error: ";
    }
    $conn->close();
?>