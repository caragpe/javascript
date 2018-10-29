const solve = function(x, y) {
  if(isNaN(parseInt(x))|| isNaN(parseInt(y))) { return null }
  else {
    let distance = distanceFromOrigin(x,y);
    return  (distance > 10)? 0 :
            (distance > 5)? 1 :
            (distance > 1)? 5 : 10;
  }
}

function distanceFromOrigin(x,y) {
  return Math.sqrt(Math.pow(x,2) + Math.pow(y,2)) 
}

module.exports = solve;