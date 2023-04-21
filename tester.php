<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ticketinfo1";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // $customerid = "123123123";
    // $firstname = "Smith";
    // $lastname = "Smithington";
    // $email = "email@email.com";
    // $phone = "270-555-5555";

    $firstname = mysqli_real_escape_string($conn, $_POST['name']);
    $lastname = mysqli_real_escape_string($conn, $_POST['lname']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    //remove all non-numeric characters from phone number
    $phone = preg_replace("/[^0-9]/", "", $_POST['phone']);
    //remove all non-numeric characters from credit card number
    $ccn = preg_replace("/[^0-9]/", "", $_POST['ccn']);
    
    //randomly spit out a 7 digit number
    $ticketid = rand(1000000, 9999999);
    $visitdate = mysqli_real_escape_string($conn, $_POST['visitDate']);
    $ticketnumadult = mysqli_real_escape_string($conn, $_POST['ticketNumAdult']);
    $ticketnumkid = mysqli_real_escape_string($conn, $_POST['ticketNumKid']);
    
    // calculate ticket price by assuming that every adult ticket costs 19.99 and every kid ticket costs 10. Also, veery 3rd adult ticket is $10 off
    $ticketprice = ($ticketnumadult * 19.99) + ($ticketnumkid * 10) - (floor($ticketnumadult / 3) * 10);


    // // insert into table "customer_info"
    // $sql = "INSERT INTO customer_info (first_name, last_name, email, phone) 
    // VALUES ('$firstname', '$lastname', '$email', '$phone')";

    // insert into table "tickets"
    $sql = "INSERT INTO tickets (ticket_id, reserved_date, adults, kids, ticket_price, ccn_used, phone) 
    VALUES ('$ticketid', '$visitdate', '$ticketnumadult', '$ticketnumkid', '$ticketprice', '$ccn', '$phone')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    }
    else {
        echo "Error: ";
    }
    $conn->close();
?>