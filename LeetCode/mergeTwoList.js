const mergeTwoLists = (list1, list2) => {
    if (!list1 && !list2) {
        return null;
    } else if (!list1) {
        return list2;
    } else if (!list2){
        return list1;
    }
    let prehead = new ListNode(-1);
    if (list1.val < list2.val) {
        prehead.next = list1;
        list1.next = mergeTwoLists(list1.next, list2);
    } else if (list1.val > list2.val) {
        prehead.next = list2;
        list2.next = mergeTwoLists(list1, list2.next);
    } else {
        prehead.next = list1;
        const list1Next = list1.next;
        list1.next = list2;
        list2.next = mergeTwoLists(list1Next, list2.next);
    }
    return prehead.next;
};