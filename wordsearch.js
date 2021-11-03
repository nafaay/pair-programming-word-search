// Worked on this program on peer programming with Ahmed Mohamed
// Here we used transpose to switch between horizontal and vertical 
// matrix
let cpt = 0;
const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    cpt++;    
    if(cpt > 1){
        return false;
    }
    else{
        return wordSearch(transpose(letters), word);
    }
}



const transpose = function (matrix) {
    const colsTransMatix = matrix.length;
    const rowsTransMatrix = matrix[0].length;
  
    const transMatrix = new Array(rowsTransMatrix).fill(0).map(() => new Array(colsTransMatix).fill(0));
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        transMatrix[j][i] = matrix[i][j];
      }
    }
      return transMatrix;
};  

module.exports = wordSearch