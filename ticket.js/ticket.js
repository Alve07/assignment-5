
let n = 0;
let x = 0;
let y = 4;
function ticketCalculation(elementId) {

    n = n + 1;
    x = x + 1;
    y = y + 1;
    // x = x.toString();
    if (n <= 4) {
        const element = document.getElementById(elementId);
        addBackgroundById(element)
        availableSeatStatus(elementId)
        totalTicketCost();
        showElementById(x);
        setElementValueById(elementId, y)
        seatStatusSmall()
        const elementBtn = document.getElementById(elementId)
        elementBtn.removeAttribute('onclick')
        seatSelected();



    }
    else {
        alert("A person can purchase only 4 Tickets!")
    }
}
