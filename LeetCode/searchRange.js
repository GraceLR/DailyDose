var searchRange = function (nums, target) {
  const len = nums.length;
  if (len === 1) {
    return nums[0] === target ? [0, 0] : [-1, -1];
  }
  let found = false;
  let left = 0;
  let right = len - 1;
  let mid = Math.floor((len - 1) / 2);
  const pos = [];
  while (left < right) {
    const midNum = nums[mid];
    if (nums[left] === target) {
      pos[0] = left;
    }
    if (nums[right] === target) {
      pos[1] = right;
    }
    if (midNum === target) {
      found = true;
      break;
    }
    if (midNum > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  if (pos[0] !== undefined && pos[1] !== undefined) {
    return pos;
  }
  if (!found) {
    if (pos[0] === undefined && pos[1] === undefined) {
      return [-1, -1];
    }
    if (pos[0] === undefined) {
      return [pos[1], pos[1]];
    }
    if (pos[1] === undefined) {
      return [pos[0], pos[0]];
    }
  } else {
    let leftLower = left;
    let rightLower = mid;
    let midLower = Math.floor((leftLower + rightLower) / 2);
    let leftHigher = mid;
    let rightHigher = right;
    let midHigher = Math.floor((leftHigher + rightHigher) / 2);
    if (pos[0] === undefined && pos[1] === undefined) {
      while (leftLower < rightLower) {
        const midNum = nums[midLower];
        if (midNum === target) {
          rightLower = midLower - 1;
        } else {
          leftLower = midLower + 1;
        }
        if (nums[leftLower] === target) {
          pos[0] = leftLower;
        }
        if (nums[rightLower] !== target) {
          pos[0] = rightLower + 1;
        }
        if (pos[0] !== undefined) {
          break;
        }
        midLower = Math.floor((leftLower + rightLower) / 2);
      }
      if (pos[0] === undefined) {
        pos[0] = mid;
      }
      while (leftHigher < rightHigher) {
        const midNum = nums[midHigher];
        if (midNum === target) {
          leftHigher = midHigher + 1;
        } else {
          rightHigher = midHigher - 1;
        }
        if (nums[rightHigher] === target) {
          pos[1] = rightHigher;
        }
        if (nums[leftHigher] !== target) {
          pos[1] = leftHigher - 1;
        }
        if (pos[1] !== undefined) {
          break;
        }
        midHigher = Math.floor((leftHigher + rightHigher) / 2);
      }
      if (pos[1] === undefined) {
        pos[1] = mid;
      }
    }
    if (pos[0] === undefined) {
      while (leftLower < rightLower) {
        const midNum = nums[midLower];
        if (midNum === target) {
          rightLower = midLower - 1;
        } else {
          leftLower = midLower + 1;
        }
        if (nums[leftLower] === target) {
          pos[0] = leftLower;
        }
        if (nums[rightLower] !== target) {
          pos[0] = rightLower + 1;
        }
        if (pos[0] !== undefined) {
          break;
        }
        midLower = Math.floor((leftLower + rightLower) / 2);
      }
      if (pos[0] === undefined) {
        pos[0] = mid;
      }
    }
    if (pos[1] === undefined) {
      while (leftHigher < rightHigher) {
        const midNum = nums[midHigher];
        if (midNum === target) {
          leftHigher = midHigher + 1;
        } else {
          rightHigher = midHigher - 1;
        }
        if (nums[rightHigher] === target) {
          pos[1] = rightHigher;
        }
        if (nums[leftHigher] !== target) {
          pos[1] = leftHigher - 1;
        }
        if (pos[1] !== undefined) {
          break;
        }
        midHigher = Math.floor((leftHigher + rightHigher) / 2);
      }
      if (pos[1] === undefined) {
        pos[1] = mid;
      }
    }
  }
  return pos;
};
