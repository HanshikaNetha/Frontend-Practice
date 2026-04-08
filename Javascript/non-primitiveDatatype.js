let fruit="apple"
fruit=["apple", "banana", "orange", "guava", "jack fruit"]
let array=[true, "hyy", 34, 32252234n, Symbol("jui"), ["abc"]]


// console.log(fruit)
// console.log(fruit[0])
// console.log(fruit[1])
// console.log(fruit[2])
// console.log(fruit[3])
// console.log(fruit[4])

// console.log()

//add elemenys
fruit.push("grapes")
// console.log(fruit)
fruit.unshift("pineapple")
// console.log(fruit)

// console.log()

//remove elements
fruit.pop()
// console.log(fruit)

fruit.shift()
// console.log(fruit)

//splice-add or remove elements to add at required position
// splice(Position, deletecount, newvalues, newvalues,...)
fruit.splice(2, 0, "kiwi")
// console.log(fruit)
fruit.splice(2, 1, "jui", "hui")
// console.log(fruit)

//concat
let fem=['anugya', 'anushka', 'dikshya', 'avni', 'yashaswini']
let male=['aditya', 'abishek', 'anshul', 'ashish','vignan']
let total=fem.concat(male)
// console.log(total)

// //length
// console.log(total.length)
// console.log(`length of the class is ${total.length}`)


let arr=new Array(1,2,3,4,5)
let arr1=Array(23, 34, 45, 56)
let arr2=Array.of(45, 56, 67 ,78, 89)



//onjects
let obj={
    mat:34,
    sci:56,
    eng:67,
    soc:90,
    hin:78,
    com:67
}
console.log(obj)

let obj1=Object({
    mat:34,
    sci:56,
    eng:67,
    soc:90,
    hin:78,
    com:67
})
console.log(obj1)