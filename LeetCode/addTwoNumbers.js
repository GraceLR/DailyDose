


 const ListNode = (val, next) => ({
     val: (val===undefined ? 0 : val),
     next: (next===undefined ? null : next)
 });

const nodes = (input, zeroNum) => {
    let next = null;
    const len = input.length;

    for (let i = 0; i < zeroNum; i++) {
        next = ListNode(0, next);
    }

    for (let i = 0; i < len; i++) {

        const ele = input[i];
        next = ListNode(ele, next);
    }

    return next;

};

const addTwoNumbers = (l1, l2) => {

    const l1Len = l1.length;
    const l2Len = l2.length;
    const len = Math.max(l1Len, l2Len);
    const obj1 = nodes(l1, len - l1Len);
    const obj2 = nodes(l2, len - l2Len);

    const rec = (next1, next2, carry = 0) => {

        if (!next1 && !next2) {
            return carry === 0 ? [] : [carry];
        }

        var num = (carry + next1.val + next2.val) % 10
        var nextCarry = Math.floor((carry + next1.val + next2.val) / 10)

        return [num, ...rec(next1.next, next2.next, nextCarry)];
    };

    return rec(obj1, obj2);
};

console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));