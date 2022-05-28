var aOperatorHander= function(event) {
    a = display.value;
    operator = event.currentTarget.innerText;
    cleanDisplay("");
  }

var concatenateNumberHandler = function(event) {
    debugger
    switch (equalPressed) {
      case undefined:
        equalPressed=false;
      case true:
        cleanDisplay('');
        equalPressed = false;
      case false:
        concatenate(event.currentTarget.innerText);
        break;
    }
  }

var concatenateDotHandler = function(event) {
    if(display.value.indexOf('.') === -1){ // .indexOf() returns the position of the first occurrence of the specified value. If it returns -1, it means that the value is not found.
      concatenate(event.currentTarget.innerText);
    }
  }

var cleanHandler = function() {
    cleanDisplay();
  }

var bCalculateHandler = function() {
  debugger
  b = display.value;
  equalPressed = true;
  
    switch(operator){
      case '+':
        total = parseFloat(a) + parseFloat(b);
        break;
        
      case '-':
          total = parseFloat(a) - parseFloat(b);
          break;
          
      case 'X':
          total = parseFloat(a) * parseFloat(b);
          break;
            
      case '-/-':
        total = parseFloat(a) / parseFloat(b);
        break;
    }
    
    display.value = total;
    a= 0;
  }