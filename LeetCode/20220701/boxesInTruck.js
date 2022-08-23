/*
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 * you can do this with a priority queue, which can help in the worst case scenario. 
 * In this case we could have to iterate over entire array because the ammount of space in the truck never hits 0.
 * In the priority queue solution, we can set it so that on the iteration that would go over our limit, it gets checked and breaks the loop.
 * Here we never go past 0 so our loop can't end early if we have a space left taht doesn't fit a box.
 */
 var maximumUnits = function(boxTypes, truckSize) {
    
    boxTypes.sort((a,b)=>b[1]-a[1]);
    var unitCounter = 0;
    console.log(boxTypes);
    for(var i of boxTypes){
        var boxCounter = Math.min(truckSize,i[0]);
        unitCounter += boxCounter * i[1];
        truckSize -= boxCounter;
        if(truckSize==0){
            break;
        }
    }
    return unitCounter;
};