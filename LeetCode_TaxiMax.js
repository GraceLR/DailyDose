
const cost = [];


const findBestPath = (qwe, n, nextNode, totalCost) => {

    if (nextNode === n) {
        cost.push(totalCost);
        return;
    }

    const node = qwe[nextNode]
    const keys = Object.keys(node);

    for (let i = 0; i < keys.length; i++) {
        const xyz = Number(keys[i]);
        const value = node[xyz]; 
        const costLayer = totalCost + value;

        findBestPath(qwe, n, xyz, costLayer);
    }

}


// const findBestPath = (arr, n, nextNode) => {
//     // base
//     // when we hit the last node

//     if (nextNode === n) {
//         return 0;
//     }

//     // recurse
//     // recurse on every edge, then return the max path length

//     const node = arr[nextNode]
//     const keys = Object.keys(node);

//     let ret = 0;

//     for (let i = 0; i < keys.length; i++) {
//         const xyz = Number(keys[i]);
//         const value = node[xyz];
//          

//         ret = Math.max(ret, findBestPath(arr, n, xyz) + value);
//     }

//     /* ??? */

//     return ret;
// }


var maxTaxiEarnings = function(n, rides) {
  
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push({
            [i+1]: 0
        });
    }

    rides.forEach(([start, end, tip]) => {

        /*
            arr[start][end] = Math.max(
                arr[start][end] ?? 0,
                tip + end - start
            );
                */
        
        if (arr[start][end] === undefined) {
            arr[start][end] = tip + end - start;
        } else {
            arr[start][end] = Math.max(arr[start][end], tip + end - start);
        }
    });

    findBestPath(arr, n, 1, 0);
    
    return Math.max(...cost);
    
};

// n = 5, rides = [[2,5,4],[1,5,1],[1,2,99],[3,4,99]]

console.log(maxTaxiEarnings(5,[[2,3,4],[4,5,1]]));

/* [
    {
        1: 0
    },
    {
        2: 100,
        5: 5
    },
    {
        5: 7
        3: 0
    },
    {
        4: 100
    },
    {
        5: 0
    }
]

]

*/
