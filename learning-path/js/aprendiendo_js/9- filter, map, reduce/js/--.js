const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function modify(parameter){
    var array = parameter.map(function(number){
        return number*10;})
        return array;   
    }
console.log(array)
console.log(modify(array))
console.log(array)