/* Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered. */

function incrementString(strng) {
  let length = 0;

  for (let i = strng.length - 1; i >= 0; i--) {
    !isNaN(strng[i]) ? length++ : i = -1;
  }

  let number = Number(strng.slice(-length)) + 1;

  if (!number) {
    return strng + 1;
  }

  if (String(number).length !== length) {
    number = number.toString();
    number = number.padStart(length, 0);
  }

  return strng.slice(0, strng.length - length) + number;
}

console.log(incrementString('foo'));
console.log(incrementString('foo23'));
console.log(incrementString('foo9'));
console.log(incrementString('foo099'));
console.log(incrementString('foobar000'));