
const maxArea = height => {

  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {

    let h = undefined;
    const w = right - left;

    if (height[left] <= height[right]) {

      h = height[left];
      left++;

    } else {

      h = height[right];
      right--;

    }

    const area = h * w;

    if (area > maxArea) {

      maxArea = area;

    }

  }

  return maxArea;

};

console.log(maxArea([1,2,15]));