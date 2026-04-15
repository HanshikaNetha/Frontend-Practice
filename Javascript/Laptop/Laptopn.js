let laptopsA=[
    {id:101, brand:"Dell", model:"XPS 13", price:12000},
    {id:102, brand:"Apple", model:"MacBook Pro", price:15000},
    {id:103, brand:"HP", model:"Spectre x360", price:11000},
    {id:104, brand:"Lenovo", model:"ThinkPad X1 Carbon", price:13000},
    {id:105, brand:"Asus", model:"ZenBook 14", price:10000}
]

// let el=document.getElementById("laptops1")
// let isDataThere=false
// function displayLaptops(){
//     if(isDataThere){
//         return
//     }
//     for(let i of laptopsA){
//         let tr="<tr><td>"+i.id+"</td><td>"+i.brand+"</td><td>"+i.model+"</td><td>"+i.price+"</td></tr>"
//         el.innerHTML+=tr
//     }
//     isDataThere=true
// }

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
        for(let j of Object.keys(lap)){
            if(j=="liked"){
                break
            }
            let td=document.createElement("td")
            td.innerHTML=lap[j]
            tr.appendChild(td)
        }
        let td1=document.createElement("td")
        td1.innerHTML="like"
        td1.style.cursor="pointer"
        td1.addEventListener("click", function(){
            lap.liked=true
            makeGreen(tr)
        })
        tr.appendChild(td1)
        let td2=document.createElement("td")
        td2.addEventListener("click", function(){
            lap.liked=false
            makeRed(tr)
        })
        td2.innerHTML="unlike"
        td2.style.cursor="pointer"
        tr.appendChild(td2)
        el2.appendChild(tr)
    }
}

let btn=document.getElementById("showbtn")
btn.addEventListener("click", displayLaptops2)


let alllike=document.getElementById("AllLike")
alllike.style.cursor="pointer"
alllike.addEventListener("click", makeAllGreen)
function makeAllGreen(){
    let allRow=document.getElementById("laptops2body")
    makeGreen(allRow)
}

let allDislike=document.getElementById("AllDislike")
allDislike.style.cursor="pointer"
allDislike.addEventListener("click", makeAllRed)
function makeAllRed(){
    let allRow=document.getElementById("laptops2body")
    makeRed(allRow)

}


function makeGreen(a){
    a.style.backgroundColor="rgb(82, 133, 82)"
}

function makeRed(a){
    a.style.backgroundColor="rgb(173, 102, 102)"
}

let showAllbtn=document.getElementById("showAll")
showAllbtn.addEventListener("click", displayLaptops2)


function getAllLiked(){
    el2.innerHTML=""
    for(let lap of laptopsA){
        if(lap.liked){
            let tr=document.createElement("tr")
            for(let j of Object.keys(lap)){
                if(j=="liked"){
                    break
                }
                let td=document.createElement("td")
                td.innerHTML=lap[j]
                tr.appendChild(td)
            }
            el2.appendChild(tr)
        }
    }
}

let showLikedbtn=document.getElementById("showLiked")
showLikedbtn.addEventListener("click", getAllLiked)
console.log(laptopsA)
