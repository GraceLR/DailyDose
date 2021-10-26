

function noPrefix(words) {
    let ind = [];
        for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[i] === words[j].substr(0,words[i].length)) {
                ind.push(j);
            }
        }
    }
    return ind.length > 0 ? 
    console.log(`BAD SET\n${words[Math.min(...ind)]}`) :
    console.log('GOOD SET');
}