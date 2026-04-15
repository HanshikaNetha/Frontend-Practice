function add(a:number ,b:number):number{
    return a+b
}
let ai:number=add(10, 20)
console.log(ai)

function gree(name:string):string{
    return "hui"+name
}
console.log(gree("kui"))

function pui(name:string, age?:number): void{
    console.log(`iam ${name} and iam ${age} years old`)
}
pui("john", 21)
pui("jonh")
