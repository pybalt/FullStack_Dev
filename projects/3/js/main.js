
function concatenate(content){
  if(display.value === '0'){
    display.value = content;
  }else{
    display.value += content;
  }
}
function cleanDisplay(_value){
  display.value = _value;
}

for(let i = 0; i < numbers.length; i++){
  numbers[i]
    .addEventListener('click', concatenateNumberHandler);
}

// When we press the equal button, we save the number in the variable 'b', and calculate the result
document.querySelector('.equal')
  .addEventListener('click', bCalculateHandler);

  // Each time we press an operator, we save the number in the variable 'a', and the operator in the variable 'operator'
for(let i = 0; i < operators.length; i++){
  operators[i]
    .addEventListener('click', aOperatorHander);
}

// If we press the dot button, we concatenate it to the display. But if we press it again, we do nothing
document.querySelector('.operator-dot')
  .addEventListener('click', concatenateDotHandler);
// If we press the 'C' button, we clean the display.
document.querySelector('.topbutton:first-child')
  .addEventListener('click', function(a,b){ // fun delete()
  cleanDisplay(0);
  a=0;
  b=0;
}); 
// If we press the 'on/Off' button, we evaluate with switch() the value of the variable 'on'
document.querySelector('.topbutton:last-child').addEventListener('click', function(){
  switch(on){
    case undefined:
      on = true; // If on===undefined, we set on to true. That means that the calculator is on. The iteration continues because there is no break.
    case true: // In case of on===true, we set on to false. It means that the next time we press the button, the calculator will be off.
      on = false;

      display.value = ''; // We clean the display

      document.querySelector('.topbutton:last-child')
        .innerText = ('OFF'); // We change the text of the button

      document.querySelector('body')
        .style
        .backgroundColor = ('#000000'); //  We change the background color of the page to black.

      document.querySelector('.calculator')
        .style
        .boxShadow = ('0px 0px 10px #ffffff'); // We change the shadow of the calculator

      document.querySelector('.calculator')
        .style
        .backgroundColor = ('#ffffff'); // We change the background color of the body of the calculator.

      for(let i = 0; i < buttons.length; i++){
        debugger; // We use the debugger to analyze the code.
        if(buttons[i].classList.contains('number')){ // If the button contain the class number, we change the background color.
          buttons[i]
            .style
            .backgroundColor = '#fcbf5d';
        }else if(buttons[i].classList.contains('operator-dot')){ // If the button contain the class operator-dot, we change the background color.
          buttons[i]
            .style
            .backgroundColor = ('#fcbf5d') // We change the background color to aliceblue.
        }else{
          buttons[i]
          .style
          .backgroundColor = 'rgb(255, 120, 66)'; // If the button doesn't contain the class number, we change the background color to emphesize the button.
        }
      }

      document.querySelector('.number')
        .disabled=false; // This doesn't work for now. I'll try to fix it later. I want to disable the buttons when the calculator is off. It doesnt work because there is a event listener on the button, so it doesnt matter if the calculator is off or on.
      
      break;
    case false: // In case of on===false, we set on to true. That means that the calculator is on. The iteration continues because there is no break.
      on = true; // we set on to true.

      display.value = ''; // We clean the display

      document.querySelector('.topbutton:last-child')
        .innerText = 'ON'; // We change the text of the button to on

      document.querySelector('body')
          .style
          .backgroundColor = ('#ffffff'); // We change the background color of the page to white.

      document.querySelector('.calculator')
          .style
          .boxShadow = ('0px 0px 10px #000000'); // We change the shadow of the calculator

      document.querySelector('.calculator')
          .style
          .backgroundColor = ('#ffffff'); // We change the background color of the body of the calculator.

      for(let i = 0; i < buttons.length; i++){
        debugger; // We use the debugger to analyze the code.
        if(buttons[i].classList.contains('number')){ // If the button contain the class number, we change the background color.
            buttons[i]
              .style
              .backgroundColor = ('aliceblue'); // We change the background color to aliceblue.

        }else if(buttons[i].classList.contains('operator-dot')){ // If the button contain the class operator-dot, we change the background color.
            buttons[i]
              .style
              .backgroundColor = ('aliceblue') // We change the background color to aliceblue.
          }else{ // If the button doesn't contain the class number or the class operator-dot, we change the background color to emphesize the button.
          buttons[i]
            .style
            .backgroundColor = '#d5eeff';
        }
      }

      document.querySelector('.number')
        .disabled=false; // This doesn't work for now. I'll try to fix it later. I want to disable the buttons when the calculator is off. It doesnt work because there is a event listener on the button, so it doesnt matter if the calculator is off or on.
      break;

  }
});