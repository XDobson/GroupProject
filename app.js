// update every 50ms the paragraph element with the id of "costp" to 19.99 * the value of the input element with the id of ticketNumAdult, plus 10 * the value of the input element with the id of ticketNumChild

function updateCost() {
    let cost = (19.99 * document.getElementById("ticketNumAdult").value) + (10 * document.getElementById("ticketNumKid").value);
    document.getElementById("costp").innerHTML = "$"+ Math.round(cost * 100) / 100;
} 
//loop previous function every 50ms
setInterval(updateCost, 50);