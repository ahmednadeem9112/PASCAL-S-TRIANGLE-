//PASCALS TRIANGLE 
let numRows = 4;
var generate = function(numRows) {
        let triangle = [[1],[1,1]];
      if (numRows == 0) {
          return [];
      } else if (numRows == 1) {
          return [[1]]
      } else if (numRows == 2) {
          return [[1],[1,1]];
      } else {
          for (let i = 2; i < numRows; i++) {
addSomeNumber(triangle)

          }
      }
 return triangle;
};

var addSomeNumber = function(triangle) {
let prev = triangle[triangle.length - 1]
let newRow = [1]
for (let i = 0; i < prev.length - 1; i++) {
    let current = prev[i];
    let next = prev[i+1];
    newRow.push(current + next);
}
newRow.push(1)
return triangle.push(newRow)
}

//generate(numRows);
console.log(generate(numRows))

