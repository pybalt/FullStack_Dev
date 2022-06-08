const DISPLAY_NAME = document.getElementById('name'),
	DISPLAY_AMOUNT = document.getElementById('amount'),
	BTN_ENVIAR = document.getElementById('save');
	BTN_DOWNLOAD = document.getElementById('download');
let	TOTAL,
	TOTAL_INDIVIDUAL;
// Arrays. SYNTAX= [var; const; let] = aNAME_EXAMPLE = [NAME1, NAME2, ...]
var aOBJECTS = [];
var aIDS = [];
// Functions. SYNTAX= [var, const, let] = NameExample
function CreateObject(NAME, AMOUNT) 
{
    let ID = CreateID();
	let DATE= new Date().toString();
    return {
        name: NAME,
        amount: AMOUNT,
        id: ID,
		date: DATE,
		hash: DATE.replace(/ /g, '')+ID+NAME+AMOUNT, // Investigar. ¿Como validaria la transacción en el backend?
    };
}
function Download() 
{ 
	var a = document.createElement('a');
	var file = new Blob([JSON.stringify(aOBJECTS)], { type: 'text/plain' });
	a.href = URL.createObjectURL(file);
	a.download = 'sesión.json';
	a.click();
}
function CreateID()
{
    let ID = Math.floor(Math.random() * 1000000);
    if (aIDS.includes(ID)) {
        CreateID();
    } else {
        aIDS.push(ID);
        return ID;
    }
}
function SpliceArrays(ID) {
	let index = aIDS.indexOf(ID);
	aOBJECTS.splice(index, 1);
	aIDS.splice(index, 1);
}
function CalculateTotal() 
{	
    TOTAL=0;
	aOBJECTS.forEach((element) => {
		TOTAL +=  element.amount;
	});
	return TOTAL;
}
function CalculateIndividual(TOTAL) 
{
	TOTAL_INDIVIDUAL = TOTAL / aOBJECTS.length; 
	TOTAL_INDIVIDUAL = TOTAL_INDIVIDUAL.toFixed(1); 
	if (isNaN(TOTAL_INDIVIDUAL)) {
		return (TOTAL_INDIVIDUAL = 0);
	} else {
		return TOTAL_INDIVIDUAL;
	}
}
function ChangeContent() 
{
	document.querySelector('.total').innerHTML = `Total: <span class="bg-warning fw-bold">$${TOTAL}</span>`;
	document.querySelector(
		'.Cresult'
	).innerHTML = `A cada uno le toca aportar: <span class="bg-warning fw-bold">$${TOTAL_INDIVIDUAL}</span>`;
}
function CalculateAndChange() 
{
	TOTAL = CalculateTotal();
	TOTAL_INDIVIDUAL = CalculateIndividual(TOTAL);
	ChangeContent();
}
function Refresh() 
{
	if (DISPLAY_NAME.value && DISPLAY_AMOUNT.value) {
		let NAME = DISPLAY_NAME.value,
			AMOUNT = Number(DISPLAY_AMOUNT.value);
		new Node(NAME, AMOUNT);
		CalculateAndChange();
	}
}
function Node(NAME, AMOUNT) 
{
	this.NAME = NAME;
	this.AMOUNT = Number(AMOUNT);
    this.INSTANCE = CreateObject(NAME, this.AMOUNT);
	aOBJECTS.push(this.INSTANCE);
	this.card = document.createElement('div');
	this.card.className = 'card';
	this.card.innerHTML = `
        <div class="card-body p-0 m-2" id="${this.INSTANCE.id}">
            <span class="name card-title h5">${this.INSTANCE.name} gastó</span>
            <span class="ignore card-text h5">$</span>
            <span class="amountS card-text h5">${this.INSTANCE.amount}</span>
        </div>
    `;
	this.card.addEventListener('click', function() {
        SpliceArrays(this.id);
        this.remove();
        CalculateAndChange();
	});
	document.querySelector('.new-screens').appendChild(this.card);
}
// Event Listeners. ELEMENT.addEventListener(EVENT, FUNCTION)
BTN_ENVIAR.addEventListener('click', Refresh);
BTN_DOWNLOAD.addEventListener('click', Download);
// Para descargar el archivo JSON
