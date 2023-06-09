//on the tickets page, updates the cost with hwo many tickets you're buying
function updateCost() {
    let cost = (19.99 * document.getElementById("ticketNumAdult").value) + (10 * document.getElementById("ticketNumKid").value);

    //for every 3 adult tickets, they get 10 dollars off
    cost -= Math.floor(document.getElementById("ticketNumAdult").value / 3) * 10

    document.getElementById("costp").innerHTML = "$" + Math.round(cost * 100) / 100;
}

//slideshow for home page
var imgUrls = ["images/zookeeper_hippo.jpg", "images/zookeeper_cheetas.jpg", "images/zookeeper_animal.jpg"];
var count = 1;
function slideshowImg() {
    document.getElementById("conservation").style.backgroundImage = "url(" + imgUrls[count] + ")";
    console.log("set to " + imgUrls[count])
    count++
    if (count == 3) {
        count = 0;
    }
}

// create an ID for a new ticket
// ticket id is 7 random letters, lower and upper case
function createID() {
    let id = "";
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 7; i++) {
        id += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return id;
}


function buyTicket() {
    //pull today from a date func
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    //if statement that takes the elemenet with the id of "phone" and makes sure its a phone number
    

    if (document.getElementById("phone").value.length != 10) {
        alert("Please enter a valid phone number");
    }


    if (
        document.getElementById("ticketNumAdult").value != 0 &&
        document.getElementById("ticketNumAdult").value <= 99 &&
        document.getElementById("ticketNumKid").value <= 99 &&
        document.getElementById("name").value != '' &&
        document.getElementById("lname").value != '' &&
        document.getElementById("email").value != '' &&
        document.getElementById("phone").value.length == 10 &&
        document.getElementById("ccn").value != '' &&
        document.getElementById("visitDate").value != '' &&
        Date.parse(document.getElementById("visitDate").value) >= Date.parse(today)
    ) {
        let ticket = {
            id: createID(),
            adultNum: document.getElementById("ticketNumAdult").value,
            kidNum: document.getElementById("ticketNumKid").value,
            date: document.getElementById("visitDate").value
        }

        //show ticket in html
        document.getElementById("kidOut").innerHTML = "Kids: " + ticket.kidNum;
        document.getElementById("dateOut").innerHTML = "For " + ticket.date;
        document.getElementById("adultOut").innerHTML = "Adults: " + ticket.adultNum;
        document.getElementById("ticketID").innerHTML = ticket.id;
        document.getElementById("ticketOutput").style.display = "flex";
        
        console.log("sending primary form");
        let form1 = document.getElementById("form");
        let formData1 = new FormData(form1);
        let xhr1 = new XMLHttpRequest();
        xhr1.open("POST", "tester2.php", true);
        xhr1.onreadystatechange = function () {
        if (xhr1.readyState === 4 && xhr1.status === 200) {
            console.log(xhr1.responseText);
        }
        };
        xhr1.send(formData1);

        console.log("sending secondary form");
        let form = document.getElementById("form");
        let formData = new FormData(form);
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "tester.php", true);
        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
        };
        xhr.send(formData);

        //buying ticket errors
    } else if (document.getElementById("ticketNumAdult").value == 0) {
        alert("Please select at least 1 adult ticket");
    } else if (document.getElementById("visitDate").value == '') {
        alert("Please select a date");
    } else if (Date.parse(document.getElementById("visitDate").value) < Date.parse(today)) {
        alert("Please select a date in the future");
    } else if (document.getElementById("ticketNumAdult").value > 99) {
        alert("Please enter less than 100 adults.");
    } else if (document.getElementById("ticketNumKid").value > 99) {
        alert("Please enter less than 100 kids.");
    } else {
        alert("Please fill out all fields.");
    }

}

// ***********************************************
// executes specific functions on specific pages
// log the class of the body tag
if (document.getElementsByTagName("body")[0].className == "homePage") {
    setInterval(slideshowImg, 5000);
}
if (document.getElementsByTagName("body")[0].className == "ticketsPage") {
    setInterval(updateCost, 50);
}
// ***********************************************


// a function that gets called when a form submit button is pushed that sends the form data to "tester.php" and logs the echo, use ajax to send the data
async function sendForm() {
    console.log("sending form");
    let form = document.getElementById("form");
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "tester.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.send(formData);
}
