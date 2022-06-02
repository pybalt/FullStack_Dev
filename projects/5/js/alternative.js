// initializing variables
let DISPLAY_NAME = document.getElementById('name'),
    DISPLAY_AMOUNT = document.getElementById('amount'),
    TOTAL,
    TOTAL_INDIVIDUAL;
BTN = document.getElementById('save');

// initializing functions
function Node(NAME, AMOUNT) {
    this.NAME = NAME;
    this.AMOUNT = AMOUNT;
    this.card = document.createElement('div');
    this.card.className = 'card';
    this.card.innerHTML = `
        <div class="card-body p-0 m-2">
            <span class="name card-title h5">${this.NAME} gastó</span>
            <span class="ignore card-text h5">$</span>
            <span class="amountS card-text h5">${this.AMOUNT}</span>
        </div>
    `;
    this.card.addEventListener('click', function() {
        this.remove();
        TOTAL = calculateTotal();
        TOTAL_INDIVIDUAL = calculateIndividual();
        changeContent();
    });
    document.querySelector('.new-screens').appendChild(this.card);
}
function calculateTotal() {
    // We are going to select all the cards with the class amountS
    let SELECTOR= document.querySelectorAll('span.amountS'); //Is a list of all the elements with the class amountS
    // We are going to stores the length of the list in a VARIABLE
    LENGTH = SELECTOR.length;
    // We are going to create a variable that will store the total
    let TOTAL = 0;
    // We are going to iterate through the list, and we are going to add the value of each element to the TOTAL
    for (let i = 0; i < LENGTH; i++) {
        TOTAL += parseInt(SELECTOR[i].innerHTML);
    }
    return TOTAL;
}
// Creating a function that changes the content of the class total and Cresult
function changeContent() {
    document.querySelector('.total').innerHTML = `Total: <span class="bg-warning fw-bold">$${TOTAL}</span>`;
    document.querySelector('.Cresult').innerHTML = `A cada uno le toca aportar: <span class="bg-warning fw-bold">$${TOTAL_INDIVIDUAL}</span>`;
}
// Creating a function that divides the number of total by the AMOUNT of people
function calculateIndividual() {
    let TOTAL_INDIVIDUAL = TOTAL / LENGTH;
    TOTAL_INDIVIDUAL = TOTAL_INDIVIDUAL.toFixed(1);
    if (isNaN(TOTAL_INDIVIDUAL)) {
        return TOTAL_INDIVIDUAL=0;
    } else {
        return TOTAL_INDIVIDUAL;
    }
}
var Refresh = function() {
    if (DISPLAY_NAME.value && DISPLAY_AMOUNT.value) {
        NAME = DISPLAY_NAME.value,
        AMOUNT = parseFloat(DISPLAY_AMOUNT.value);
        new Node(NAME, AMOUNT);
        TOTAL = calculateTotal();
        TOTAL_INDIVIDUAL = calculateIndividual();
        changeContent();
    }
}
// initializing events
BTN.addEventListener('click', Refresh);