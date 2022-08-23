/*
 * @param {number[][]} people
 * @return {number[][]}
 * Sort the original queue by height (tallest to shortest), then you will be able to insert each element into another queue based on element[i][1]
 * because it is soted by height alread, putting it in index based on element[i][1] means it will be pushed into correct spot as second array is filled
 * time complex: O(n^2), sorting is nlogn, while inserting is O(n)
 */
 var reconstructQueue = function(people) {
    people.sort((a,b)=>a[0]-b[0] || b[1] - a[1]);
    console.log(people);
    var result = Array();
    for (let i = people.length-1 ; i >= 0 ; i--){
        result.splice(people[i][1], 0, people[i])
    }
    console.log(result);
    return result;
                   
};