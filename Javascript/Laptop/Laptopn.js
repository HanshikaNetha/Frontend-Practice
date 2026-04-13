let laptopsA=[
    {id:101, brand:"Dell", model:"XPS 13", price:12000},
    {id:102, brand:"Apple", model:"MacBook Pro", price:15000},
    {id:103, brand:"HP", model:"Spectre x360", price:11000},
    {id:104, brand:"Lenovo", model:"ThinkPad X1 Carbon", price:13000},
    {id:105, brand:"Asus", model:"ZenBook 14", price:10000}
]

let el=document.getElementById("laptops1")
let isDataThere=false
function displayLaptops(){
    if(isDataThere){
        return
    }
    for(let i of laptopsA){
        let tr="<tr><td>"+i.id+"</td><td>"+i.brand+"</td><td>"+i.model+"</td><td>"+i.price+"</td></tr>"
        el.innerHTML+=tr
    }
    isDataThere=true
}

// let el2=document.getElementById("laptops2body")
// function displayLaptops2(){
//     el2.innerHTML=""
//     for(let i of laptopsA){
//         let tr=document.createElement("tr")
//         let td_id=document.createElement("td")
//         td_id.innerHTML=i.id
//         let td_brand=document.createElement("td")
//         td_brand.innerHTML=i.brand
//         let td_model=document.createElement("td")
//         td_model.innerHTML=i.model
//         let td_price=document.createElement("td")
//         td_price.innerHTML=i.price
//         tr.appendChild(td_id)
//         tr.appendChild(td_brand)
//         tr.appendChild(td_model)
//         tr.appendChild(td_price)
//         el2.appendChild(tr)
//     }
// }


let el2=document.getElementById("laptops2body")
function displayLaptops2(){
    el2.innerHTML=""
    for(let lap of laptopsA){
        let tr=document.createElement("tr")
        for(let j of Object.values(lap)){
            let td=document.createElement("td")
            td.innerHTML=j
            tr.appendChild(td)
        }
        el2.appendChild(tr)
    }
}