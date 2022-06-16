const DISPLAY_NAME = document.getElementById('name'),
	DISPLAY_AMOUNT = document.getElementById('amount'),
	BTN_ENVIAR = document.getElementById('save');
	BTN_DOWNLOAD = document.getElementById('download');
	BTN_LOAD= document.getElementById('load');
var	total,
	total_individual;
// Arrays. SYNTAX= [var; const; let] = aNAME_EXAMPLE = [NAME1, NAME2, ...]
var aObjects = [];
var aIds = [];
// Functions. SYNTAX= [var, const, let] = NameExample
function createObject(name, amount) 
{
    let id = createID();
	let date= new Date().toString();
    return {
        name: name,
        amount: amount,
        id: id,
		date: date,
		hash: date.replace(/ /g, '')+id+name+amount, // Investigar. ¿Como validaria la transacción en el backend?
    };
}
function read()
{
	fetch('sesion.json') // Fetch local method. Fetchs the file from the repository...
		.then(response => response.json())
		.then(data => {
			for (let i=0; i<data.length; i++){
				new Node(data[i].name, data[i].amount, data[i].id, data[i].date, data[i].hash);
			}
		});
}
function download() 
{
	var a = document.createElement('a');
	var file = new Blob([JSON.stringify(aObjects)], { type: 'application/json' });
	a.href = URL.createObjectURL(file);
	a.download = 'sesión.json';
	a.click();
}
function createID()
{
    let id = Math.floor(Math.random() * 1000000);
    if (aIds.includes(id)) {
        createID();
    } else {
        aIds.push(id);
        return id;
    }
}
function spliceArrays(id) {
	let index = aIds.indexOf(id);
	aObjects.splice(index, 1);
	aIds.splice(index, 1);
}
function calculateTotal() 
{	
    total=0;
	aObjects.forEach((element) => {
		total +=  element.amount;
	});
	return total;
}
function calculateIndividual(total) 
{
	total_individual = total / aObjects.length; 
	total_individual = total_individual.toFixed(1); 
	if (isNaN(total_individual)) {
		return (total_individual = 0);
	} else {
		return Number(total_individual);
	}
}
function changeContent() 
{
	document.querySelector('.total').innerHTML = `Total: <span class="bg-warning fw-bold">$${total}</span>`;
	document.querySelector(
		'.Cresult'
	).innerHTML = `A cada uno le toca aportar: <span class="bg-warning fw-bold">$${total_individual}</span>`;
}
function calculateAndChange() 
{
	total = calculateTotal();
	total_individual = calculateIndividual(total);
	changeContent();
}
function refresh() 
{
	if (DISPLAY_NAME.value && DISPLAY_AMOUNT.value) {
		let name = DISPLAY_NAME.value,
			amount = Number(DISPLAY_AMOUNT.value);
		new Node(name, amount);
		calculateAndChange();
	}
}
class Node {
	constructor(name, amount) {
		this.name = name;
		this.amount = Number(amount);
		this.instance = createObject(name, this.amount);
		aObjects.push(this.instance);
		this.card = document.createElement('div');
		this.card.className = 'card';
		this.card.innerHTML = `
        <div class="card-body p-0 m-2" id="${this.instance.id}">
            <span class="name card-title h5">${this.instance.name} gastó</span>
            <span class="ignore card-text h5">$</span>
            <span class="amountS card-text h5">${this.instance.amount}</span>
        </div>
    `;
		this.card.addEventListener('click', function () {
			spliceArrays(this.id);
			this.remove();
			calculateAndChange();
		});
		document.querySelector('.new-screens').appendChild(this.card);
	}
}
// Event Listeners. ELEMENT.addEventListener(EVENT, FUNCTION)
BTN_ENVIAR.addEventListener('click', refresh);
BTN_DOWNLOAD.addEventListener('click', download);// Para descargar el archivo JSON
BTN_LOAD.addEventListener('click', ()=>
{
	read();
	calculateAndChange();
}
);// Para cargar el archivo JSON
