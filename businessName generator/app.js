const div = document.querySelector("div")
let adj;
let names;
let word;
let randomAdj = Math.random()
if (randomAdj<=0.33) {
    adj= "crazy"
}
if (randomAdj>=0.33 && randomAdj<=0.66) {
    adj= "fire"
}
else {
    adj= "amazing"
}

let randomName = Math.random()
if (randomName<=0.33) {
    names= "engine"
}
else if (randomName>=0.33 && randomAdj<=0.66) {
    names= "food"
}
else {
    names= "garments"
}
    
    let randomWord = Math.random()
  if (randomWord<=0.33) {
     word= "bros"
  }
  else if (randomWord>=0.33 && randomAdj<=0.66) {
     word= "limited"
  }
  else {
     word= "hub"
  }

    console.log(adj, names, word)
    div.innerText = `${adj} ${names} ${word}`
