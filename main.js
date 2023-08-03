const binaryInput = document.querySelector('.binary-box');
const decimalOutput = document.querySelector('.decimal-box');
const inputBtn = document.querySelector('.convert-button');

let binaryIndex = [];
let binary;
inputBtn.addEventListener('click', getBinaryInput);

function getBinaryInput() {
    event.preventDefault();
    binaryIndex.push(binaryInput.value); 
    // console.log(binaryIndex);
    containsNumbers(binaryIndex);
    binaryConvertion(binaryIndex); 
}
function containsNumbers(str) {
    console.log(binaryIndex)
    let checkNum = /[2-9]/.test(str)
    let checkStr = /^\d+$/.test(str)
    if (checkNum === true) {
        binaryIndex.pop();
        return alert('Type only 0 or 1 numbers');
    }
    else if(checkStr === false){
        return alert('Type only 0 or 1 numbers')
    };
    return;
}
function binaryConvertion() {
    let binary = parseInt(binaryIndex[binaryIndex.length - 1], 2);
    console.log(binary)
    if(binary){
    decimalOutput.value = binary;
    }
}

