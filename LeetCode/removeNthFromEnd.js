var removeNthFromEnd = function(head, n) {
    let count = 0;
    let nodeWatch = head;
    let nodeWatchCt = 0;
    let currentNode = head;
    while (currentNode.next) {
        currentNode = currentNode.next;
        count++;
        if (count > n) {
            nodeWatch = nodeWatch.next;
        }
    }
    if (n === count + 1) {
        return head.next;
    } else {
        nodeWatch.next = nodeWatch.next.next;
    }
    return head;
};