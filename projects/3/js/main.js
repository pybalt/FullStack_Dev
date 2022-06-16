function concatenate(content) {
	if (DISPLAY.value === '0') {
		DISPLAY.value = content;
	} else {
		DISPLAY.value += content;
	}
}
function cleanDisplay(_value) {
	DISPLAY.value = _value;
}
function powerOn() {
	DISPLAY.value = ''; // We clean the display
	POWERBUTTON.innerText = 'OFF'; // We change the text of the button
	body.style.backgroundColor = '#000000'; //  We change the background color of the page to black.
	calculator.style.boxShadow = '0px 0px 10px #ffffff'; // We change the shadow of the calculator
	calculator.style.backgroundColor = '#ffffff'; // We change the background color of the body of the calculator.
	for (let i = 0; i < BUTTONS.length; i++) {
		if (BUTTONS[i].classList.contains('number')) {
			// If the button contain the class number, we change the background color.
			BUTTONS[i].style.backgroundColor = '#fcbf5d';
		} else if (BUTTONS[i].classList.contains('operator-dot')) {
			// If the button contain the class operator-dot, we change the background color.
			BUTTONS[i].style.backgroundColor = '#fcbf5d'; // We change the background color to aliceblue.
		} else {
			BUTTONS[i].style.backgroundColor = 'rgb(255, 120, 66)'; // If the button doesn't contain the class number, we change the background color to emphesize the button.
		}
	}
	NUMBERS.disabled = false; // This doesn't work for now. I'll try to fix it later. I want to disable the buttons when the calculator is off. It doesnt work because there is a event listener on the button, so it doesnt matter if the calculator is off or on.
}
function powerOff() {
	DISPLAY.value = ''; // We clean the display
	POWERBUTTON.innerText = 'ON'; // We change the text of the button to on
	body.style.backgroundColor = '#ffffff'; // We change the background color of the page to white.
	calculator.style.boxShadow = '0px 0px 10px #000000'; // We change the shadow of the calculator
	calculator.style.backgroundColor = '#ffffff'; // We change the background color of the body of the calculator.
	for (let i = 0; i < BUTTONS.length; i++) {
		if (BUTTONS[i].classList.contains('number')) {
			// If the button contain the class number, we change the background color.
			BUTTONS[i].style.backgroundColor = 'aliceblue'; // We change the background color to aliceblue.
		} else if (BUTTONS[i].classList.contains('operator-dot')) {
			// If the button contain the class operator-dot, we change the background color.
			BUTTONS[i].style.backgroundColor = 'aliceblue'; // We change the background color to aliceblue.
		} else {
			// If the button doesn't contain the class number or the class operator-dot, we change the background color to emphesize the button.
			BUTTONS[i].style.backgroundColor = '#d5eeff';
		}
	}
	NUMBERS.disabled = false; // This doesn't work for now. I'll try to fix it later. I want to disable the buttons when the calculator is off. It doesnt work because there is a event listener on the button, so it doesnt matter if the calculator is off or on.
}
for (let i = 0; i < NUMBERS.length; i++) {
	// We will use this later to disable the buttons when the calculator is off.
	NUMBERS[i].addEventListener('click', concatenateNumberHandler);
}

EQUAL.addEventListener('click', bCalculateHandler); // When we press the equal button, we save the number in the variable 'b', and calculate the result // Each time we press an operator, we save the number in the variable 'a', and the operator in the variable 'operator'
for (let i = 0; i < OPERATORS.length; i++) {
	OPERATORS[i].addEventListener('click', aOperatorHander);
}
DOT.addEventListener('click', concatenateDotHandler); // If we press the dot button, we concatenate it to the display. But if we press it again, we do nothing
CLEAR.addEventListener('click', () => cleanDisplay(0), (a = 0), (b = 0)); // If we press the 'C' button, we clean the display.
// If we press the 'on/Off' button, we evaluate with switch() the value of the variable 'on'
POWERBUTTON.addEventListener('click', function() {
	debugger;
	switch (on) {
		case undefined:
			on = true; // If on===undefined, we set on to true. That means that the calculator is on. The iteration continues because there is no break.

		case true: // In case of on===true, we set on to false. It means that the next time we press the button, the calculator will be off.
			on = false;
			powerOn();
			break;

		case false: // In case of on===false, we set on to true. That means that the calculator is on. The iteration continues because there is no break.
			on = true; // we set on to true.
			powerOff();
			break;
	}
});
DELETEBUTTON.addEventListener('click', () => (DISPLAY.value = DISPLAY.value.slice(0, -1)));
// If we press the h button, we clean show the history of the calculations.
HISTORYBUTTON.addEventListener('click', () => {
	if (aHistory.length > 0) {
		let aTemporalArray = aHistory.reduce((previousValue, currentValue) => {
			return previousValue + `||` + currentValue + `||`; // Temporal fix. I want to display the history in a table.
		});
		DISPLAY.value = aTemporalArray;
	} else {
		DISPLAY.value = 'No history';
	}
});
