module.exports = function countCats(matrixRows) {
  var count = 0;
  var matrixColumns = [];
  for (var i = 0; i < matrixRows.length; i++){
    matrixColumns = matrixRows[i];
    for(var j = 0; j < matrixColumns.length; j++){
      if(matrixColumns[j] == "^^"){
      count++;
      }
    }
  }
  return count;
};
