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
  let arrExpr=expr.split('');
  let arr = [];
  let binary = [];
  let morseElement=[]
  for (let i = 0; i < arrExpr.length+1; i++) {
    if(i > 9  && i % 10 == 0){
      binary.push(arr.join(''));
      arr = [];
    }
    arr.push(arrExpr[i]);
  }
  for (let i = 0; i < binary.length; i++) {
    let arr=[];
    let arrBinary = binary[i].split('');
    for (let j = 0; j < 12; j++){
      if (arrBinary[j] == '1' && arrBinary[j+1] == '0') {
        j += 1;
        arr.push('.');
      }
      if (arrBinary[j] == '1' && arrBinary[j + 1] == '1') {
        j += 1;
        arr.push('-');
      }
      if (arrBinary[j] == "*"){
        j = 10;
        arr.push('**********');
      }
    }
    morseElement.push(arr.join(''));
  }
  let lettersArr =[];
  for (let i = 0; i < morseElement.length; i++) {
    for (let key in MORSE_TABLE) {
      // console.log(key);
      if (morseElement[i] == key) {
        lettersArr.push(MORSE_TABLE[key])
      }
  }
}
  return lettersArr.join('');

}
module.exports = {
    decode
}
