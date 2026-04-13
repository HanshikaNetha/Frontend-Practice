
let table=document.getElementById("table")
let api1="https://api.escuelajs.co/api/v1/products"
async function fetchData() {
    let response=await fetch(api1)
    let data=await response.json()
    console.log(data)

    for(let i=0; i<data.length-1; i++){
        let tr1=document.createElement("tr")
        tr1.innerHTML=`
        <td>${data[i].id}</td>
        <td>${data[i].price}</td>
        <td>${data[i].title}</td>
        <td>${data[i].slug}</td>
        <td>${data[i].description}</td>
        `
        table.append(tr1)
    }
}
fetchData()