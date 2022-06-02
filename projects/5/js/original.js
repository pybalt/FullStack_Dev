// initializing variables
let DISPLAY_NAME = document.getElementById('name'),
    DISPLAY_AMOUNT = document.getElementById('amount'),
    TOTAL,
    TOTAL_INDIVIDUAL;
var DICTIONARY = {},
BTN = document.getElementById('save');

// initializing functions
function Screen(name, amount) {
    this.name = name;
    this.amount = amount;
    this.card = document.createElement('div');
    this.card.className = 'card';
    this.card.innerHTML = `
        <div class="card-body">
            <span class="name card-title h5">${this.name} gastó</span>
            <span class="amount card-text h5">$${this.amount}</span>
        </div>
    `;
    this.card.addEventListener('click', function() {
        pato=this.name
        delete DICTIONARY.pato;
        console.log(DICTIONARY);
        this.remove();
    });
    document.querySelector('.new-screens').appendChild(this.card);
}
function calculateTotal() {
    TOTAL=0;
    for (let key in DICTIONARY) {
        TOTAL += DICTIONARY[key];
    }
    return TOTAL;
}
// Creating a function that changes the content of the class total and Cresult
function changeContent() {
    document.querySelector('.total').innerHTML = `Total: $${TOTAL}`;
    document.querySelector('.Cresult').innerHTML = `A cada uno le toca aportar: $${TOTAL_INDIVIDUAL}`;
}
// Creating a function that divides the number of total by the amount of people
function calculateIndividual() {
    let TOTAL_INDIVIDUAL = TOTAL / Object.keys(DICTIONARY).length;
    return TOTAL_INDIVIDUAL;
}
var Refresh = function() {
    if (DISPLAY_NAME.value && DISPLAY_AMOUNT.value) {
        name = DISPLAY_NAME.value,
        amount = parseFloat(DISPLAY_AMOUNT.value);
        let screen = new Screen(name, amount);
        DICTIONARY[name] = amount;
        console.log(DICTIONARY);
        TOTAL = calculateTotal();
        TOTAL_INDIVIDUAL = calculateIndividual();
        changeContent();
    }
}
// initializing events
BTN.addEventListener('click', Refresh);