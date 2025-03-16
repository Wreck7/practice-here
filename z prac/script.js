// problem 1 
// write  a JS program to check two numbers and if one of the number is 100 or if the sum of two is 100
{
    let check = (a, b) => a === 100 || b === 100 || (a + b) === 100;
    console.log(check(90, 100));
}
// problem 2
// write JS program to get the extension of filename
{
    // let src = document.querySelector("script").src
    // src = src.split("/").slice(-1)[0]
    // console.log(src)
    let getFileExtension = (str) => str.slice(str.lastIndexOf("."))
    console.log(getFileExtension("/img/cover.jpeg"))
    console.log(getFileExtension("webpack.config.js"))// this brings only last occurence
}
// problem 3 
// write a JS program to replace every character in a given string with the character following it in the alphabets
{
    let moveCharsForward = (str) => {
        str.split("").map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join("");
    }
    console.log(moveCharsForward("vishwa"))
}
// problem 4 
// write a JS program to get current date. output: yyyy-mm-dd, dd-mm-yyyy
{
    let format = (date = new Date()) =>{
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }
    console.log(format());
}
// problem 5
// write a JS program to create a new string adding "New!" in front of a given string. if given string begins with "New!" already then return the original string
{
    // let wen = "New!";
    // let given = "New"
    // const fun = () =>{
    //     if(given.startsWith(wen)){
    //         return given;
    //     }
    //     else{
    //         return wen.concat(given);
    //     }
    // }
    // console.log(fun())
    let addNew = (str) =>{
        str.startsWith("New!") ? str : `New! ${str}`
    }
    console.log(addNew("New!"))
}
// quiz 1 
{
    console.log(0 || 1 || 2)// output: 1 because 0 = false, 1 = true, 2 = anything in JavaScript
}
// quiz 2 flat an array of arrays
{
let array = [1,[23,43],[21],2]
let updatedArray = array.flat()
console.log(updatedArray)
}
// quiz 3
// remove duplicates from an array
{
    const array = ["vishwa", "karthik", "tejas", "vishwa", "tejas"]
    // const array = [1,2,3,3,4,1,5]
    const finArray = [...new Set(array)]
    console.log(finArray)
}