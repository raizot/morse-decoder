const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' '
};

function decode(expr) {
    let arrStr= expr.split('');
    let morseArr=[];
    let morseBinary=[];
    for (let i = 0; i < arrStr.length; i++) {
      for (let key in MORSE_TABLE) {
        if (arrStr[i] == MORSE_TABLE[key]) {
          morseArr.push(key)
        }
      }
    }
  for (let i = 0; i < morseArr.length; i++) {
    let morseSplit = morseArr[i].split('');
    let arrNum = [];
    let arrSplit =[];
        if (morseArr[i].includes("*")) {
          arrNum.push("**********")
        }
    morseSplit.forEach(element => {
      if (element == '-') {
        arrNum.push("11");
      }
      if(element == '.'){
      arrNum.push("10");
      }
    });
    arrNum.forEach(elem =>{
      let num = elem.split('');
      num.forEach(num => {
         arrSplit.push(num);
      })
    });
    for (let i = 0; i < 10; i++) {
      if (arrSplit.length < 10) {
        arrSplit.unshift('0');
      }
    }
    morseBinary.push(arrSplit.join(''));
  } 
  console.log(arrStr);
  return morseBinary.join('');
}

module.exports = {
    decode
}
