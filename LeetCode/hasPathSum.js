const hasPathSum = (root, targetSum) => {
  const children = ["left", "right"];
  const walk = (node, sum) => {
    if (sum === targetSum && !node) {
      return true;
    }
    if (sum >= targetSum || !node) {
      return false;
    }
    for (const child of children) {
      if (walk(node[child], sum + node.val)) {
        return true;
      }
    }
    return false;
  };
  if (!root) {
    return false;
  }
  return walk(root, 0);
};
