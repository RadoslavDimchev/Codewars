/* Very simple, given an integer or a floating-point number, find its opposite. */

/* Examples:
1: -1
14: -14
-34: 34 */

function opposite(number) {
    return number *= -1;
}

// second solution
/* function opposite(number) {
    let oppositeNumber = number >= 0 ? -number : Math.abs(number);
      return oppositeNumber;
} */

console.log(opposite(1));
console.log(opposite(14));
console.log(opposite(-34));