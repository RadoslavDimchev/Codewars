/* Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. 
The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints
0 <= input.length <= 100 */

/* function validParentheses(parens) {
  const length = parens.length;
  const closingLength = parens.replace(/\(/g, '').length;

  if (parens[0] === ')' || parens[length - 1] === '(') {
    return false;
  }

  return closingLength * 2 === length ? true : false;
} */

function validParentheses(parens) {
  while (parens.includes('()')) {
    parens = parens.replace('()', '');
  }

  return !parens.length;
}

validParentheses("()()");
validParentheses("");
validParentheses("()");
validParentheses(")(()))");
validParentheses("(");
validParentheses("(())((()())())");