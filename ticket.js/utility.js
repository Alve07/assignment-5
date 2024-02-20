function getInnerTextById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    return elementValue
}
function getInnerTextValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = element.value;
    return elementValue
}

function addBackgroundById(element) {
    element.classList.add('bg-[#1DD100]');
    element.classList.add('text-white');
}

function setElementValueById(value, elementId) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}


function availableSeatStatus(elementId) {
    const availableSeatElement = document.getElementById('available-seat')
    const availableSeatText = availableSeatElement.innerText;
    const availableSeatInt = parseInt(availableSeatText);
    const availableSeat = availableSeatInt - 1;
    setElementValueById(availableSeat, 'available-seat');

}

function totalTicketCost() {
    const totalCostElement = document.getElementById('total-cost');
    const totalCostText = totalCostElement.innerText;
    const totalCostInt = parseInt(totalCostText);
    const totalCost = totalCostInt + 550;
    setElementValueById(totalCost, 'total-cost')
    return totalCost;

}

function seatStatusSmall() {
    const elementText = getInnerTextById('seat-status-small')
    const elementInt = parseInt(elementText);
    console.log(elementInt)
    const element = elementInt + 1;
    setElementValueById(element, 'seat-status-small')


}

function discountCode(couponCode) {

    return code;
}

let s = 0;
function seatSelected() {
    s = s + 1;
}

function discountedPrice() {
    const couponCode = getInnerTextValueById('grand-coupon');
    console.log(couponCode)


    if (s === 4) {
        let code = 0;
        let x = 0
        if (couponCode === 'NEW15') {
            code = 0.15;
            x = 1

        }
        else if (couponCode === "Couple20") {
            code = 0.20;
            x = 1
        }
        else {
            x = 0
            alert('Invalid Code');
        }

        console.log(code);
        const totalFairText = getInnerTextById('total-cost');
        const totalFair = parseInt(totalFairText);

        const grandTotal = totalFair - (totalFair * code);
        console.log(grandTotal);
        hideElementById('grand-coupon');
        hideElementById('discount-apply');
        showElementById('alert-coupon');
        setElementValueById(grandTotal, 'grand-total');
    }

    else {
        alert("Buy at-least 4 tickets to avail coupon")
    }

}
