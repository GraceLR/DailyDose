
var minCostClimbingStairs = function(cost) {

    min = [0,0];
        for (var i = 2; i < cost.length; i++) {
            min.push(Math.min(cost[i-2] + min[i-2], cost[i-1] + min[i-1]));
        }
    return Math.min(cost[cost.length-2] + min[min.length-2], cost[cost.length-1] + min[min.length-1]);
    };

    console.log(minCostClimbingStairs([10,15,20]));
    console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]));