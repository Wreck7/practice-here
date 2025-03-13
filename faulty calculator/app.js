const div = document.querySelector("div")
let first = prompt("enter the first number")
let operator = prompt("enter the arithmetic operation")
let second = prompt("enter the second number")
let random = Math.random()
console.log(random)
let obj = {
    "+": "-",
    '-': '+',
    '*': '/',
    '/': '*'
}
if (random<0.1) {
    operator = obj[operator]
        console.log(eval(`${first}${operator}${second}`))
        div.innerText = eval(`${first}${operator}${second}`)
    
} else {
    div.innerText = eval(`${first}${operator}${second}`)
}