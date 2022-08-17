var transpose = function(matrix) {
    /* Does not work for nonsquare arrays:
    let result = matrix.map(function(arr){return arr.slice();}); */
    
    let result = [];
    
    for(let row = 0; row < matrix.length; row ++){
        for(let col = 0; col < matrix[0].length; col++){
            if(!result[col])
                result[col]=[];
            result[col][row] = matrix[row][col];
        }
    }
    
   
    
    return result;
    
    
};