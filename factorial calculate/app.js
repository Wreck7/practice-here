let num = prompt("enter a number to calculate factorial!");
let arr = [];
const div = document.querySelector("div");
for (let i = 1; i <= num; i++) {
    arr.push(i)
}
console.log(arr)
let result = arr.reduce(
    (prev, curr)=>prev*curr
)
console.log(result);
div.innerText = result;