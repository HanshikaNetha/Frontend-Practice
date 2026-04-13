//highorder function and callback function
//create a calculator that recevies multiple values and perform addition, substraction, multiplication, division, modulus 
function calc(v1, v2, callbackfun){
    return callbackfun(v1, v2)
}

let add=calc(100, 200, (a, b)=>a+b)
console.log("addition of two numbers:",add)

let sub=calc(100, 200, (a, b)=>a-b)
console.log("subtraction of two numbers:",sub)

let mul=calc(100, 200, (a, b)=>a*b)
console.log("nultiplication of two numbers:",mul)

let div=calc(100, 200, (a, b)=>a/b)
console.log("Division of two numbers:",div)

let mod=calc(100, 200, (a, b)=>a%b)
console.log("modulus of two numbers:",sub)


