// Code your solution in this file!
function distanceFromHqInBlocks(pickUp){
    if (pickUp > 42){
        return pickUp - 42
    }else{
        return 42-pickUp
    }     
}

function distanceFromHqInFeet(pickUp){
    if (pickUp > 42){
        return (pickUp - 42)*264
    }else{
        return (42-pickUp)*264
    } 
}

function distanceTravelledInFeet(start, end){
    if (start < 42){
        return(start-end)*264;
    } else{
        return(end - start)*264;
    }  
}

function calculatesFarePrice(start,end){
    const feet = distanceTravelledInFeet(start, end)
    if (feet <=  400){
        return 0
    }else if (feet > 400 && feet <=2000 ){
        return (feet - 400) * .02 
    }else if (feet > 2000 && feet < 2500){
        return 25
    }else{
        return 'cannot travel that far'
    }
} 
