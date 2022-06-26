/* It's pretty straightforward. 
Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. 
You don't have to worry with strings with less than two characters. */

function removeChar(str) {
    let arr = [...str]
    arr.shift();
    arr.pop();
    str = arr.join('');

    return str;

    //second solution
    /*   let res = '';
      for (let i = 1; i < str.length - 1; i++) {
          res += str[i];
      }
      return res; */

    //third solution
    /* return str.slice(1, -1); */
}

console.log(removeChar('this'));