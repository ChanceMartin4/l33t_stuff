/*
This does not work when multiple intervals overlap. plus it's ugly. 

 var merge = function(intervals) {
    intervals.sort(sortFunction);
    let result = [];
    
    
    for(let i = 0; i<intervals.length; i++){
        if(intervals[i+1]){
            if(intervals[i][1] >=intervals[i+1][1]){
                result.push(intervals[i]);
                i++;
                continue;
            }
        }
        if(intervals[i+1]){
            if(intervals[i][1] >= intervals[i+1][0]){
                result.push([intervals[i][0],intervals[i+1][1]]);
                i++;
                continue;
            }
        }
        
        
    result.push(intervals[i]);
        
    console.log(result);
    }
    return result;
    
};

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
} 
*/

/*essentially the same idea, but checks the entire array with back tracking and splice
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    if(intervals.length < 2) return intervals;

    intervals.sort((a,b)=>a[0]-b[0]);

    for (let i = 1; i < intervals.length; i++) {
        let curr = intervals[i];
        let prev = intervals[i-1];

        if(curr[0]<=prev[1]){
            intervals[i] = [prev[0],Math.max(prev[1],curr[1])];
            intervals.splice(i-1,1);
            i-=1;
        }
    }
    return intervals;
};