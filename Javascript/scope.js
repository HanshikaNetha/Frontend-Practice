//global scope
//function scope
//block scope

var mssg="hyy"

function sum(){
    var value1=1    //fucntion scope
    let value2=2    //function scope
    const value3=3
}

// console.log(value1)//cannot access here cause var has funciton scope
// console.log(value2)//cannot access here cause let has funciton scope
// console.log(value3)//cannot access here cause const has funciton scope

if(true){
    var m="hrlo"
}
console.log(m)

if(true){
    let me="hui"
    const n="nui"
}
// console.log(me) //let cannot be accessed cause it doesnthave global scope
// console.log(nui)//const cannot be accessed cause it doesnthave global scope