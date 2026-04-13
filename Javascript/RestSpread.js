// // rest paramter
// function recieveValues(para1, para2, para3, ...para4){
//     console.log(para1)  //20
//     console.log(para2)  //30
//     console.log(para3)  //40
//     console.log(arguments)  //20, 30, 40, 50, 60, 75, 43, 34, 67
//     console.log(para4)  // 50, 60, 75, 43, 34, 67
// }
// recieveValues(20, 30, 40, 50, 60, 75, 43, 34, 67)

// //spread operator
// let f1=["apple", "banana", "mango"]
// let f2=["jackfruit", "grapes", "custard apple", f1]
// console.log(f2)
// console.log(f2.flat())

// let f4=f2.flat()

// let f3=[...f1, ...f4, "lichi", "orange"]
// console.log(f3)

let obj={
    orange:4,
    banana:5,
    mango:6
}
let obj2={
    grapes:15,
    jackfruit:1,
    koila:5,
    ...obj
}
// console.log(obj2)


//destructuring
let array=["hui", "jui", "kui", "gui", "mui"]
// console.log(array)

let [s1, s2, s3, s4, s5]=array
// console.log(s1)
// console.log(s2)
// console.log(s3)
// console.log(s4)
// console.log(s5)

let [st1, st2, ...st3]=array
// console.log(st1)
// console.log(st2)
// console.log(st3)

let infp={
    name:"kui",
    age:45,
    city:"dmm",
    pincode:515671
}
// let {name, city, pincode, age}=infp
// console.log(name)
// console.log(city)
// console.log(pincode)
// console.log(age)


let {name , age, ...obj1}=infp
console.log(name)
console.log(age)
console.log(obj1)


