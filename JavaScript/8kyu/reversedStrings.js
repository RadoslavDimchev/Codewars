/* Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow' */


function reversedStrings(str) {
    let reversed = str.split('').reverse().join('');
    return reversed;
}

console.log(reversedStrings('world'));