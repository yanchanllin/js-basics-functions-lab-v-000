// Code your solution in this file!
function distanceFromHqInBlocks (distance) {
  if (distance > 42){
    return distance -42
  } else {
    return 42 - distance
  }
}

function distanceFromHqInFeet (someValue) {
  distanceFromHqInBlocks(someValue);
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}
