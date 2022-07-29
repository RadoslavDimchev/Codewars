/* Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9] 
NOTE: The idea is not sort the elements from the lowest value to the highest;
 the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].*/

snail = function (array) {
  let result = [];

  while (array.length) {
    result.push(...array.shift());

    for (let i = 0; i < array.length; i++) {
      result.push(array[i].pop());
    }

    result = result.concat((array.pop() || []).reverse());

    for (let i = array.length - 1; i > 0; i--) {
      result.push(array[i].shift());
    }
  }

  return result;
}

snail([[1]]);
snail([[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]);
snail([[1, 2, 3],
[8, 9, 4],
[7, 6, 5]]);
snail([[1, 2, 3, 4, 5],
[6, 7, 8, 9, 10],
[11, 12, 13, 14, 15],
[16, 17, 18, 19, 20],
[21, 22, 23, 24, 25]]);

// second solution

/* snail = function (array) {
  const result = [];
  let [minRow, maxRow, minCol, maxCol] = [0, array.length - 1, 0, array[0].length - 1];
  let count = 0;
  let maxCount = (maxRow + 1) * (maxCol + 1);

  while (maxCount > count) {

    for (let c = minCol; c <= maxCol && maxCount > count; c++) {
      result.push(array[minRow][c]);
      count++;
    }

    minRow++;

    for (let r = minRow; r <= maxRow && maxCount > count; r++) {
      result.push(array[r][maxCol]);
      count++;
    }

    maxCol--;

    for (let c = maxCol; c >= minCol && maxCount > count; c--) {
      result.push(array[maxRow][c]);
      count++;
    }

    maxRow--;

    for (let r = maxRow; r >= minRow && maxCount > count; r--) {
      result.push(array[r][minCol]);
      count++;
    }

    minCol++;
  }

  return result;
} */