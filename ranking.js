

function binary(array, target) {

  let left = 0;
  let right = array.length - 1;

  if (array.length === 0) {
    return 1;
  } else {

    while (!(left === right - 1)) {

      let midpoint = ((right + left) % 2 === 0 ?
        (right + left) / 2 : (right + left + 1) / 2);
            
      if (array[midpoint] > target) {
        left = midpoint;
      } else if (array[midpoint] < target) {
        right = midpoint;
      } else if (array[midpoint] === target) {
        return midpoint + 1;
      }
    }

    if (target >= array[left]) {
      return left + 1;
    } else if (target < array[right]) {
      return right + 2;
    } else if (target === array[right]) {
      return right + 1;
    } else if (target > array[right] && target < array[left]) {
      return left + 2;
    }

  }
}


function climbingLeaderboard(ranked, player) {

  let newRank = [];
  newRank.push(ranked[0]);
  for (let i = 1; i < ranked.length; i++) {
    if (ranked[i] !== ranked[i - 1]) {
      newRank.push(ranked[i]);
    }
  }

  return player.map(function(ele) {
    return binary(newRank,ele);
  });
}
