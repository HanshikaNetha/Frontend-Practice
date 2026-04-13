//targetting the html element
let h1=document.getElementById("heading1")
// let h1=document.getElementsByClassName("heading1")
// let h1=document.getElementsByTagName("heading1")
// let h1=document.querySelector("heading1")
// let h1=document.querySelectorAll("heading1")

// console.log(h1)

//changing the content
// h1.innerText=" but still no holiday"

// let h2=document.getElementById("heading2")
// h2.innerHTML="thuthu"

let h3=document.querySelector("#heading3")
console.log(h3)

let h4=document.querySelectorAll("p")
console.log(h4)

let h5=document.querySelector("#heading2")
console.log(h5)
h5.style.backgroundColor="red"
h5.style.color="white"
h5.style.padding="20px"
h5.style.textAlign="center"

document.body.style.margin=0
document.body.style.padding=0