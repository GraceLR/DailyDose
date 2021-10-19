

function minimumBribes(q) {
    
    let counter = 0;
    for (var i = 0; i < q.length; i++) {
        if ((q[i] - (i + 1) > 0) & (q[i] - (i + 1) <= 2)) {
            counter += q[i] - (i + 1);
        } else if ((q[i] - (i + 1) > 2)) {

            return 'Too chaotic';
        }
    }
    
    return counter;

}

console.log(minimumBribes([2,5,1,3,4]))