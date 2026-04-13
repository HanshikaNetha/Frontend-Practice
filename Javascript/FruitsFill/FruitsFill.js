

let fruits=["Apple", "Banana", "Cherry", "mango", "jackfruit"]
let el=document.getElementById('fruits')
function displayFruits(){
    let fr=''
    for(let i of fruits){
        fr+="<option>"+i+"</option>"
        el.innerHTML=fr
    }
}

let el2=document.getElementById('fruits1')
let isthere=false
function displayfruits2(){
    // el2.innerHTML=""
    if(isthere){
        return
    }
    for(let i of fruits){
        let op=document.createElement("option")
        op.innerHTML=i
        el2.appendChild(op)
        isthere=true
    }
}