/* Move the first letter of each word to the end of it, 
then add "ay" to the end of the word. Leave punctuation marks untouched. */

function pigIt(str) {
  let buff = '';
  let result = '';

  for (const char of str) {
    const chCode = char.charCodeAt();

    if ((chCode >= 65 && chCode <= 90) || (chCode >= 97 && chCode <= 122)) {
      buff += char;
    } else {
      if (buff) {
        result += buff.slice(1) + buff[0] + 'ay';
        buff = '';
      }

      result += char;
    }
  }

  buff ? result += buff.slice(1) + buff[0] + 'ay' : buff = '';

  return result;
}

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('This is my string')); // 'hisTay siay ymay tringsay'
console.log(pigIt('Hello world !')); // elloHay orldway !