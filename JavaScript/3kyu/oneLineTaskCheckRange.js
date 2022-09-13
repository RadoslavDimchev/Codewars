/* You're given an array of integers a and two integers x and y. 
Count the number of elements in the array such that `x ≤ a[i] ≤ y, where i is the 0-based index of the element.

Code Limit

Less than 48 characters.
Example

For a = [2, 5, 6, 7, 1, 3, 4, 11, 56, 49], x = 1 and y = 7,

the output should be 7.

elements 2, 5, 6, 7, 1, 3, 4 should be counted. */

const checkRange=(a,x,y)=>a.map(v=>i+=x>v==v>y,i=0)|i

console.log(checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49], 1, 7));
console.log(checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49], 3, 5));
console.log(checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49], 7, 10));
console.log(checkRange([7, 5, 11, 8, 9, 1, 13, 12, 88], 99, 100));
console.log(checkRange([12, 1, 45, 56, 98, 14, 23, 46], 14, 14));
console.log(checkRange([1, 1, 1, 99, 99, 99], 88, 88));