function getInnerTextById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
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

const arr = [];
function availableSeatStatus(elementId) {

    arr.push(elementId);
    console.log(arr)
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

}