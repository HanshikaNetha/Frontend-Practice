let promise=new Promise((resolve, rejected)=>{
    // resolve("the promise i sfullfilled")
    rejected("promise is rejected")

})
console.log(promise)
promise
.then((data)=>{console.log(data)})
.catch((errormssg)=>{console.log(errormssg)})
.finally(()=>{console.log("i will execute no matter what at the end")})