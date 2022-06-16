var aOperatorHander= function(event) {
    a = DISPLAY.value;
    operator = event.currentTarget.innerText;
    cleanDisplay("");
  }

var concatenateNumberHandler = function(event) {    
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
    if(DISPLAY.value.indexOf('.') === -1){ // .indexOf() returns the position of the first occurrence of the specified value. If it returns -1, it means that the value is not found.
      concatenate(event.currentTarget.innerText);
    }
  }

var cleanHandler = function() {
    cleanDisplay();
  }

var bCalculateHandler = function() {
  b = DISPLAY.value;
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
    // we save the history of the operation in the array 'history'
    aHistory.push(a + ' ' + operator + ' ' + b + ' = ' + total);
    DISPLAY.value = total;
    a= 0;
  }