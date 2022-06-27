const swapPairs = (head) =>{
    let ct = 0;
    let current = head;
    let prev = null;
    while (current) {
        let localPrev = current.next;
        if (!localPrev) {
            return head;
        }
        if (ct === 0) {
            head = localPrev;
        }
        current.next = current.next.next;
        localPrev.next = current;
        if (prev) {
            prev.next = localPrev;
        }
        prev = current;
        current = current.next;
        ct++;
    }
    return head;
};