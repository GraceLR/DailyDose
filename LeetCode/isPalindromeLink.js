const isPalindrome = (head) => {
  let prevNode = null;
  let currentNode = head;
  const vals = [];
  while (currentNode) {
    vals.push(currentNode.val);
    const nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  let node = prevNode;
  let i = 0;
  while (node) {
    if (node.val !== vals[i]) {
      return false;
    }
    node = node.next;
    i++;
  }
  return true;
};
