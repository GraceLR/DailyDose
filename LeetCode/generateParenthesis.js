const generateParenthesis = n => {
    const resDraft = [];
    const rec = (prevStr, ct1, ct2) => {
      if (ct1 === 0) {
          while (ct2 > 0) {
              prevStr += ')';
              ct2--;
          }
          return [prevStr];
      }
      const one = rec(prevStr + '(', ct1 - 1, ct2);
        if (one) {
            resDraft.push(one[0]);
        }
      if (ct1 < ct2) {
        const two = rec(prevStr + ')', ct1, ct2 - 1);
        if (two) {
            resDraft.push(two[0]);
        }
      }
        return;
    };
    const edgeCase = rec('(', n-1, n);
    return edgeCase ? edgeCase : resDraft;
};