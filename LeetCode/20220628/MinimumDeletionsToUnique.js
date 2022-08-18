/*stolen from solution. 
 * @param {string} s
 * @return {number}
 */
 var minDeletions = function(s) {
    let arr = Array(26).fill(0)
    let res = 0
    
    /*store counts of each element*/
    for(let i=0;i<s.length; i++){
        let index = s[i].charCodeAt(0) - 'a'.charCodeAt(0)
        arr[index]++
    }
    /*sort counts lowest to highest*/
    arr.sort((a,b)=>b-a)
    
    /*iterate throuh the counts. If current count is greater previous count decrement that count until unqiue. then move on to next count*/
    for(let i=1; i<26; i++){
        while(arr[i] && arr[i] >= arr[i-1]){
            arr[i]--
            res++
        }
    }
    
    return res
}  