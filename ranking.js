
function improved(array, target) {
    let rank = 1;
    for (let i = 0; i < array.length; i++) {
        if (target >= array[i]) {
            break;
        } else {
            rank += 1;
        }
    }
    return rank;
}


function climbingLeaderboard(ranked, player) {

    let newRank = [];
    newRank.push(ranked[0]);
    for (let i = 1; i < ranked.length; i++) {
        if (ranked[i] !== ranked[i-1]) {
            newRank.push(ranked[i]);
        }
    }

    return player.map(function (ele) {
        return improved(newRank,ele);
    });
}
