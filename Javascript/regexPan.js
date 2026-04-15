let text='ABCDE1234R87'
var patt=/^[a-z]{5}[0-9]{4}[a-z]$/i
var valid=patt.test(text)
console.log(valid)

let inputPan=document.getElementById("panNum")
inputPan.addEventListener("input", function(){
    let val=inputPan.value.addEventListener
})