/*
 * @param {number[]} boxes
 * @param {number[]} warehouse
 * @return {number}
 * sort the boxes in asecending order, then greedily check how many boxes can fit in warehouse.
 * boxesLeft gives number of boxes possibly left that could go into warehouse. it is decrement if the the current box is bigger than current room
 * assuming we have a current box that is less than or equal to current room size, we go to next room and continue the process until boxes left hits less than 0
 * We could process the warehouse so that there are no increasing size rooms as you iterate, then looping through to fill with boxes sortedfrom smallest to largest, but that is typically not allowed
 */
 var maxBoxesInWarehouse = function(boxes, warehouse) {
    boxes.sort((a,b)=>a-b);
    var boxesLeft = boxes.length-1;
    var count = 0;

   
    for (var room of warehouse) {
    
        while(boxesLeft >= 0 && boxes[boxesLeft]>room) {
            boxesLeft--;
        }
        
        if(boxesLeft == -1){return count;}
        count++;
        boxesLeft--;
        
    }
    
    return count;
};