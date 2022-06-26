/* You get an array of numbers, return the sum of all of the positives ones. */
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    arr = arr.filter(x => x > 0);
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum;
}

/* console.log(positiveSum([1, -4, 7, 12])); */
console.log(positiveSum([0]));