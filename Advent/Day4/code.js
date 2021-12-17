
const { testDraw, testBoards, realDraw, realBoards } = require("./input");

const transpose = (matrix) => {
    return matrix[0].map((letter, i) => matrix.map(row => row[i]));
  };

const rowMargin = matrix => {
    const rowMargin = matrix.map(row => {
        let res = 1;
        row.forEach(num => res = res * Number(num));
        return res;
    });
    return rowMargin;
};

const check = array => {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === 1) {
            return Number(i);
        }
    }
    return undefined;
}
const included = (num, array) => {
    for(let i = 0; i < array.length; i++) {
        if(num === array[i]) {
            return num;
        }
    }
    return undefined;
}

// const day4Part1 = (draw, boards) => {

//     let result = undefined;

//     let cond = boards.map(matrix => {
//         return matrix.map(row => {
//             return row.map(_num => 0);
//         });
//     });

//     for(let i = 0; i < draw.length; i++) {
//         if(result !== undefined) {
//             return result;
//         }
//         boards.forEach((matrix, j) => {
//             if(result !== undefined) {
//                 return;
//             } 
//             matrix.forEach((row, k) => {
//                 if(result !== undefined) {
//                     return;
//                 }
//                 row.forEach((num, l) => {
//                     if(result !== undefined) {
//                         return;
//                     }
//                     if(cond[j][k][l] === 0 && num === draw[i]) {
//                         cond[j][k][l] = 1;
//                     }
//                     if(i >= boards[0].length - 1) {
//                         if(check(rowMargin(cond[j])) !== undefined ||
//                         check(rowMargin(transpose(cond[j]))) !== undefined) {
//                             let sum = 0;
//                             boards[j].forEach((row, ri) => {
//                                 row.forEach((num, ni) => {
//                                     if(cond[j][ri][ni] === 0) {
//                                         sum += num;
//                                     }
//                                 });
//                             });
//                             result = sum * draw[i];
//                             return;
//                         }
//                     }
//                 });
//             });
//         });
//     }
// return 'No winner';
// }

// console.log(day4Part1(testDraw, testBoards));
// console.log(day4Part1(realDraw, realBoards));


const day4Part2 = (draw, boards) => {

    let result = undefined;
    let boardsWin = [];

    let cond = boards.map(matrix => {
        return matrix.map(row => {
            return row.map(_num => 0);
        });
    });

    for(let i = 0; i < draw.length; i++) {
        if(result !== undefined) {
            return result;
        }
        boards.forEach((matrix, j) => {
            if(result !== undefined) {
                return;
            } 
            matrix.forEach((row, k) => {
                if(result !== undefined) {
                    return;
                }
                row.forEach((num, l) => {
                    if(result !== undefined) {
                        return;
                    }
                    if(cond[j][k][l] === 0 && num === draw[i]) {
                        cond[j][k][l] = 1;
                    }
                    if(i >= boards[0].length - 1) {
                        if(check(rowMargin(cond[j])) !== undefined ||
                        check(rowMargin(transpose(cond[j]))) !== undefined) {
                            if(included(j, boardsWin) === undefined) {
                                boardsWin.push(j);
                            }
                            if(boardsWin.length === boards.length) {
                                let sum = 0;
                                boards[j].forEach((row, ri) => {
                                    row.forEach((num, ni) => {
                                        if(cond[j][ri][ni] === 0) {
                                            sum += num;
                                        }
                                    });
                                });
                                result = sum * draw[i];
                                return;
                            }
                        }
                    }
                });
            });
        });
    }
return 'No winner';
}

console.log(day4Part2(testDraw, testBoards));
console.log(day4Part2(realDraw, realBoards));
