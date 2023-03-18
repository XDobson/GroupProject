
//on the tickets page, updates the cost with hwo many tickets you're buying
function updateCost() {
    let cost = (19.99 * document.getElementById("ticketNumAdult").value) + (10 * document.getElementById("ticketNumKid").value);

    //for every 3 adult tickets, they get 10 dollars off
    cost -= Math.floor(document.getElementById("ticketNumAdult").value / 3) * 10

    document.getElementById("costp").innerHTML = "$" + Math.round(cost * 100) / 100;
}
// loop previous function every 50ms
setInterval(updateCost, 50);

let imgUrls = ["images/zookeeper_hippo.jpg", "images/zookeeper_cheetas.jpg", "images/zookeeper_animal.jpg"];
let count = 1;
function slideshowImg() {
    document.getElementById("conservation").style.backgroundImage = "url(" + imgUrls[count] + ")";
    console.log("set to " + imgUrls[count])
    count++
    if (count == 3) {
        count = 0;
    }
}
setInterval(slideshowImg, 5000);