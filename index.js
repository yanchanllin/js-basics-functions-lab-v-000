// Code your solution in this file!
function distanceFromHqInBlocks (distance) {
  if (distance > 42){
    return distance -42
  } else {
    return 42 - distance
  }
}

function distanceFromHqInFeet (distance) {
  return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet (start,end) {
  if (start > end){
    return (start - end)* 264
  } else {
    return (end - start)* 264
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance >= 2500) {
    return 'cannot travel that far';
  } else if (distance >= 2000) {
    return 25;
  } else if (distance >= 400) {
    return distance * .02;
  } else {
    return 0;
  }
}