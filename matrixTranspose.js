const transpose = function(matrix) {
 
  let resultMatrix = [];
  
  for (let i = 0; i < matrix[0].length; i++) {
    resultMatrix.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    resultMatrix.push();
    for (let j = 0; j < matrix[0].length; j++) {
      resultMatrix[j][i] = matrix[i][j];
      
    }
  }
  return resultMatrix;
};

module.exports = transpose;