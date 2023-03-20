// Code your solution in this file!
function distanceFromHqInBlocks(pickUp){
    if(pickUp<42){return 42-pickUp;}
    return pickUp-42;
}
function distanceFromHqInFeet(pickUp){
    return 264*(distanceFromHqInBlocks(pickUp));
}
function distanceTravelledInFeet(start,dest){
    let temp=0;
    if(dest<start){
        temp=dest;
        dest=start;
        start=temp;
    }
    return 264*(dest-start);
}
function calculatesFarePrice(start,dest){
    let n=distanceTravelledInFeet(start,dest);
    if(n<=400){
        return 0;
    }
    else if (n>400 && n<=2000){
        return 0.02*(n-400);
    }
    else if(n>2000 && n<=2500){
        return 25;
    }
    else if(n>2500){
        return "cannot travel that far";
    }
}