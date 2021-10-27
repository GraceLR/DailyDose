



const noPrefix = (words) => {

  let trie = {};

  const prefixWord = words.find((word) => {

    let pointer = trie;

    const isFound = word.split("").find((char) => {

        let nextPointer = pointer[char];

        if (pointer.end === 1) {
            return true;    
        }
        
        if (nextPointer === undefined) {
            nextPointer = {};
        }
                
        pointer = nextPointer;

        return false;
    });

    if (isFound) {
        return true;
    }

    pointer.end = 1;

  });

  return prefixWord === undefined ? 'good' : 'bad';
  
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