

const encrypt = function(plaintext, key) {
    
    let res = [];
    for(let i = 0; i < plaintext.length; i++) {
        if(plaintext[i] === ' ') {
            res.push(' ');
        } else {
            let pos = plaintext[i].charCodeAt(0) + (key % 26);
            if(pos < 97) {
                pos = 123 + pos - 97;
            } else if (pos > 123) {
                pos = 97 + pos - 123;
            }
            res.push(String.fromCharCode(pos));
        }
    }
    return res.join('');
  };
  
  module.exports = { encrypt };