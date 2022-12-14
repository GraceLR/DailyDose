const hasPathSum = (root, targetSum) => {
  const children = ["left", "right"];
  const walk = (node, sum) => {
    if (sum === targetSum && !node.left && !node.right) {
      return true;
    }
    for (const child of children) {
      if (node[child] && walk(node[child], sum + node[child].val)) {
        return true;
      }
    }
    return false;
  };
  if (!root) {
    return false;
  }
  return walk(root, root.val);
};
