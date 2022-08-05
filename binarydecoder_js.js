var binDecRadio = document.querySelector('input[id="bin-to-dec"]'),
decBinRadio = document.querySelector('input[id="dec-to-bin"]'),
binTextRadio = document.querySelector('input[id="bin-to-text"]'),
textBinRadio = document.querySelector('input[id="text-to-bin"]'),
button = document.querySelector('#button'),
instruction = document.querySelector("#instruction"),
result = "",
output = document.querySelector("#bin-output"),
userInput = document.querySelector("#bin-input"),
operation = "convert bin to dec",
clearBtn = document.querySelector(".clear");

const binToDec = function(bin){
  return parseInt(bin, 2)
};

const decToBin = function(dec){
  x = dec
  let bin = []
  while( x != 0){
    if( x % 2 === 1){
      bin.unshift('1')
    }else {
      bin.unshift('0')
    }
    if (x === 1){
      break;
    }
    x = Math.floor(x/2)
  }
  return bin.join('')
};

const isBin = function(bin) {
  let regex = /[0-1]/ig
  let inputMatch = bin.toString().match(regex)
  if(inputMatch.join('') === bin.toString()){
    return true
  }else {
    return false
  }
}

const isDec = function(dec) {
  if(parseInt(dec) == dec){
    return true
  }else {
    return false
  }
}

const binToText = function(string){
  let decimalText = ''
  let array = string.split(" ")
  array.forEach((binWord) => {
    let decimal = binToDec(binWord)
    console.log(decimal)
    let letter = String.fromCharCode(decimal)
    decimalText += letter
})
  return decimalText
};

const textToBin = function(text) {
  let result = []
  let binText = []
  for(let i = 0; i < text.length; i++){
    result.push(text.charCodeAt(i))
  }
  for(let i = 0; i < result.length; i++){
    binText.push(decToBin(result[i]))
  }
  return binText.join(' ')
};

decBinRadio.addEventListener("click", (event) => {
  button.innerHTML = 'Encode  <i class="fas fa-angle-double-right"></i>';
  instruction.innerHTML = "Your decimal number";
  operation = "convert dec to bin";
  clear()
});

binTextRadio.addEventListener("click", (event) => {
  button.innerHTML = 'Decode  <i class="fas fa-angle-double-right"></i>';
  instruction.innerHTML = "Your bin text";
  operation = "convert bin to text";
  clear()
});

textBinRadio.addEventListener("click", (event) => {
  button.innerHTML = 'Encode  <i class="fas fa-angle-double-right"></i>';
  instruction.innerHTML = "Your text";
  operation = "convert text to bin";
  clear()
});

binDecRadio.addEventListener("click", (event) => {
  button.innerHTML = 'Decode  <i class="fas fa-angle-double-right"></i>';
  instruction.innerHTML = "Your bin number";
  operation = "convert bin to dec";
  clear()
});

clearBtn.addEventListener("click", (event) => {
  clear()
});

button.addEventListener("click", (event) => {
  let input = userInput.value
  if(input != ''){
    switch(operation){
      case 'convert bin to dec':
        if(isBin(input)){
          result = binToDec(input)
        }else {
          alert("Bin numbers only includes 0 and 1.")
        }
        break;
      case 'convert dec to bin':
        if(isDec(input)){
          result = decToBin(input)
        }else{
          alert("This isn't a decimal number.")
        }
        break;
      case 'convert bin to text':
        if(input.split(' ').every(num => isBin(num) === true)){
          result = binToText(input)
        }else {
          alert("Bin numbers only includes 0 and 1")
        }
        break;
      case 'convert text to bin':
        result = textToBin(input)
        break;
    }
  }
  output.innerHTML = result
});

const clear = function(){
  userInput.value = ''
  output.innerHTML = ''
  result = ''
};