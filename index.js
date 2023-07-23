// Code your solution in this file!

function distanceFromHqInBlocks(numberBlocks) {
    if (numberBlocks > 42) {
        return (numberBlocks - 42);
    } else {
        return (42 - numberBlocks);
    }
}


function distanceFromHqInFeet(numberBlocks) {
    distanceFromHqInBlocks(numberBlocks) * 264;
}


function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, distance) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}