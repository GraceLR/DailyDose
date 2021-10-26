



const noPrefix = (words) => {

  let trie = {};
  let res = 'not found';

  words.forEach((word) => {

    let pointer = trie;

    word.split("").forEach((char) => {

        if (pointer.end === 1) {
            res = 'found';
            return;
            
          } else if (pointer[char] === undefined) {
            pointer[char] = {};
          }
                
          pointer = pointer[char];
    });

    pointer.end = 1;

  });

  return res;
  
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