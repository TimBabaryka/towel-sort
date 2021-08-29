
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0 ) {
    return []
  }
  for( let i=1; i<matrix.length; i++){
     matrix[i++].reverse();
  }
    return matrix.flat()
  }










// if (Array.length > 9) {
//   let decision = matrix[1,1].reverse()+ matrix[3,3].reverse()
//   decision=matrix.toString()
//    decision = decision.split(',')
//   return decision.map(Number);
//   } else {
//     let decision = matrix[1,1].reverse()
//     decision=matrix.toString()
//      decision = decision.split(',')
//     return decision.map(Number);



