

const noPrefix = (words) => {

  let trie = {};

  for (let i = 0; i < words.length; i++) {
      
    let pointer = trie;

    for (let j = 0; j < words[i].length; j++) {
            
      if (pointer.end === 1) {
        return 'found';
      } else if (pointer[words[i][j]] === undefined) {
        pointer[words[i][j]] = {};
      }
            
      pointer = pointer[words[i][j]];

    }
    pointer.end = 1;
  }

  return 'not found';
};


// function noPrefix(words) {
//     let ind = [];
//     for (let i = 0; i < words.length; i++) {
//         for (let j = 0; j < words.length; j++) {
//             if (i !== j &&
//             words[i].length <= words[j].length &&
//             words[i] === words[j].substr(0,words[i].length)) {
//                 ind.push(j);
//             }
//         }
//     }
//     return ind.length > 0 ?
//     console.log(`BAD SET\n${words[Math.min(...ind)]}`) :
//     console.log('GOOD SET');
// }


console.log(noPrefix(['a','bb','bba','aab']));