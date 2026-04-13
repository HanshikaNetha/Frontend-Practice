
function add(a, b){
    return a+b
}
// console.log(add(1,2))


async function add(a,b) {
    
    return a+b
}
let result = add(1,2)
// console.log(result) 

async function fu(){
    let pre= await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return pre
    
}
let rs=fu()
// rs.then((response)=>{return response.json()}).then((data)=>{console.log(data)}).catch((errmssg)=>{console.log(errmssg)})


// rs.then((data)=>{console.log(data)}).catch((errmssg)=>{console.log(errmssg)})


async function hu() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data= await response.json()
    return data
}
// try{
//     let wi=await hu()
//     console.log(wi) 
// }catch(errmssg){
    // console.log(errmssg)
// }

function add3(a, b){
    return new Promise((resolve, reject)=>{
        if(typeof a=="number" && typeof b=="number"){
            resolve(a+b)
        }
        else{
            reject("a csand b should be numbers")
        }
    })
}

// add3(3,4).then((result)=>{console.log(result)}).catch((errmssg)=>{console.log(errmssg)})
// add3(3,"4").then((result)=>{console.log(result)}).catch((errmssg)=>{console.log(errmssg)})

async function test(){
    try{
        let f=await add3(4, 5)
        console.log(f)
        let g=await add3(4, "5")
        console.log(g)
    }
    catch(errmssg){
        console.log(errmssg)
    }
}

test()