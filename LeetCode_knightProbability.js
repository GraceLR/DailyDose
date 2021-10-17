
var knightProbability = function(n, k, row, column) {
    return (numPath(n, k, row, column, 0))/(8 ** k);
};
    

var numPath = function(n, k, row, column, step) {
    
    if (row < 0 || column < 0 || row > n-1 || column > n-1) {
        return 0;
    }
    
    if (step === k) {
        return 1;
    }
           
    let directions = 
        [[2,1], [2,-1], [-2,1], [-2,-1], [1,2], [-1,2], [1,-2], [-1,-2]];
        
    let pathCount = 0;
    directions.forEach(function ([i,j]) {       
        pathCount += numPath(n, k, row + i, column + j, step + 1);    
    });   
      
    return pathCount;
                
}