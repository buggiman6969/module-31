// function declaration

function add(num1 , num2){
    const total = num1 + num2;
    return total;
}

// option 2

const add1 = function add1(num1 , num2){
    const total = num1 + num2;
    return total;
}

// option 3

const add2 =function (num1 , num2){
    const total = num1 + num2;
    return total;
}
// arrow function 

const add3 = (num1 , num2) => num1 + num2 ;

const result  =  add3 (88 , 22);
console.log(result);


const division= num1, num2 => console.log(num1 /num2)