let likebtn=document.getElementById("likebtn")
let dislikebtn=document.getElementById("dislikebtn")


let countForLike=0
let countForDisLike=0
function increaseLike(){
    console.log("likes are increasing")
    countForLike++
    likebtn.innerText=`❤️ ${countForLike}`
    console.log(countForLike)
}
function increaseDislike(){
    console.log("dislikes are increasing")
    countForDisLike++
    dislikebtn.innerText=`👎 ${countForDisLike}`
    console.log(countForDisLike)
}