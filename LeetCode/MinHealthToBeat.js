/**
 * @param {number[]} damage
 * @param {number} armor
 * @return {number}
 */
 var minimumHealth = function(damage, armor) {
    let most = Math.max(...damage);
    
    let index = damage.indexOf(most);
    
    let life = most - armor;
    
    if(life<0){
        life = 0;
    }
    
    for(let i = 0; i<damage.length; i++){
        if(i!=index){
            life += damage[i];
        
        }
    }
    
    console.log(life);
    return life+1;
};