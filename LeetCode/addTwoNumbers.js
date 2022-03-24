


const listNode = input => {

    let obj = {};
    let next = obj;

    input.forEach((ele, i) => {

        next.val = ele;
        
        if (i === input.length - 1) {

            next.next = null;

        } else {

            next.next = {};

        }

        next = next.next;

    });

    return obj;

};

// const addTwoNumbers = (l1, l2) => {
//     let obj = null;
//     let next = null;
//     let carry = 0;
//     while (l1 || l2 || carry > 0) {
//         const sum = carry + (l1?.val ?? 0) + (l2?.val ?? 0);
//         var num = sum % 10;
//         carry = Math.floor(sum / 10);

//         if (obj === null) {
//             obj = ListNode(num, null);
//             next = obj;
//         } else {
//             next.next = ListNode(num, null);
//             next = next.next;
//         }

//         l1 = l1?.next;
//         l2 = l2?.next;
//     }
    
//     return obj;
// };

// const addTwoNumbers = (l1, l2) => {

//     let obj = null;
//     let next = null;
//     let carry = 0;
//     while (l1 || l2 || carry > 0) {
//         const sum = carry + (l1?.val ?? 0) + (l2?.val ?? 0);
//         var num = sum > 9 ? sum - 10 : sum;
//         carry = sum > 9 ? 1 : 0;

//         if (obj === null) {
//             obj = ListNode(num, null);
//             next = obj;
//         } else {
//             next.next = ListNode(num, null);
//             next = next.next;
//         }

//         l1 = l1?.next;
//         l2 = l2?.next;
//     }
    
//     return obj;

// };

const addTwoNumbers = (l1, l2) => {

    let obj = {};
    let next = obj;
    let carry = 0;

    while (l1 || l2 || carry > 0) {

        const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
        const num = sum % 10;
        carry = Math.floor(sum / 10);

        next.val = num;

        if (!l1 && !l2) {

            next.next = null;

        } else {

            next.next = {};

        }

        next = next.next;

        l1 = l1?.next;
        l2 = l2?.next;

    }

    return obj;

};



console.log(addTwoNumbers(listNode([9,9,9,9,9,9,9]), listNode([9,9,9,9])));