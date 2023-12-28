let body = document.querySelector('body')

let hexCode = '#'
let code = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
let colorName = document.querySelector('h1');

function getRandomCode() {
   return Math.floor(Math.random() * code.length)
}

for(let i=0; i<6; i++){
    hexCode += code[getRandomCode()]
    body.style.backgroundColor = hexCode
}

colorName.innerHTML = `Colour: ${hexCode}`;
