
function climbingLeaderboard(ranked, player) {
    let ranks = [];
    player.forEach(function (ele) {
        let rank = (ele < ranked[0] ? 2 : 1);
        for (let i = 1; i < ranked.length; i++) {
            if (ranked[i-1] != ranked[i] && 
                ele < ranked[i]) {
                rank += 1;
            }
        }
        ranks.push(rank);
    })
    return ranks;
}