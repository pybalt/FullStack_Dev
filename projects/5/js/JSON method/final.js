// VARIABLES AND CONSTANTS. SYNTAX= [var, const, let] = NAME_EXAMPLE
const DISPLAY_NAME = document.getElementById('name'),
	DISPLAY_AMOUNT = document.getElementById('amount'),
	BTN = document.getElementById('save');
let	TOTAL,
	TOTAL_INDIVIDUAL;
// Arrays. SYNTAX= [var, const, let] = aNAME_EXAMPLE = [..., ..., ...]
let aNAMES = [],
	aAMOUNTS = [],
	aIDS = [];
// Functions. SYNTAX= [var, const, let] = NameExample
function CreateID() {
	let ID = Math.floor(Math.random() * 1000000);
	if (aIDS.includes(ID)) {
		CreateID();
	} else {
		return ID;
	}
}
function PushArrays(NAME, AMOUNT, ID) {
	aNAMES.push(NAME);
	aAMOUNTS.push(AMOUNT*1);
	aIDS.push(ID);
}
function SpliceArrays(ID) {
	let index = aIDS.indexOf(ID);
	aNAMES.splice(index, 1);
	aAMOUNTS.splice(index, 1);
	aIDS.splice(index, 1);
}
function CalculateTotal() {
    TOTAL=0;
	aAMOUNTS.forEach((element) => {
		TOTAL += parseInt(element);
	});
	return TOTAL;
}
function CalculateIndividual(TOTAL) {
	TOTAL_INDIVIDUAL = TOTAL / aAMOUNTS.length;
	TOTAL_INDIVIDUAL = TOTAL_INDIVIDUAL.toFixed(1);
	if (isNaN(TOTAL_INDIVIDUAL)) {
		return (TOTAL_INDIVIDUAL = 0);
	} else {
		return TOTAL_INDIVIDUAL;
	}
}
function changeContent() {
	document.querySelector('.total').innerHTML = `Total: <span class="bg-warning fw-bold">$${TOTAL}</span>`;
	document.querySelector(
		'.Cresult'
	).innerHTML = `A cada uno le toca aportar: <span class="bg-warning fw-bold">$${TOTAL_INDIVIDUAL}</span>`;
}
function CalculateAndChange() {
	TOTAL = CalculateTotal();
	TOTAL_INDIVIDUAL = CalculateIndividual(TOTAL);
	changeContent();
}
function Refresh() {
	if (DISPLAY_NAME.value && DISPLAY_AMOUNT.value) {
		let NAME = DISPLAY_NAME.value,
			AMOUNT = DISPLAY_AMOUNT.value;
		new Node(NAME, AMOUNT);
		CalculateAndChange();
	}
}
function Node(NAME, AMOUNT) {
	this.NAME = NAME;
	this.AMOUNT = AMOUNT;
	let ID = CreateID();
    this.ID=ID;
	PushArrays(NAME, AMOUNT, ID);
	this.card = document.createElement('div');
	this.card.className = 'card';
	this.card.innerHTML = `
        <div class="card-body p-0 m-2" id="${this.ID}">
            <span class="name card-title h5">${this.NAME} gastó</span>
            <span class="ignore card-text h5">$</span>
            <span class="amountS card-text h5">${this.AMOUNT}</span>
        </div>
    `;
	this.card.addEventListener('click', function() {
		SpliceArrays(this.ID);
		this.remove();
		CalculateAndChange();
	});
	document.querySelector('.new-screens').appendChild(this.card);
}
// Event Listeners. ELEMENT.addEventListener(EVENT, FUNCTION)
BTN.addEventListener('click', Refresh);