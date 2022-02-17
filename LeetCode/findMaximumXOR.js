

const findMaximumXOR = nums => {

    let objBin = {};

    for(let i = 0; i < nums.length; i++) {

        const num = nums[i];
        const bin = num.toString(2);
        const binLen = bin.length;

        for(let j = binLen - 1; j >= 0; j--) {
            if(objBin[binLen - 1 - j] === undefined) {
                objBin[binLen - 1 - j] = {};
            }
            if(objBin[binLen - 1 - j][bin[j]] === undefined) {
                objBin[binLen - 1 - j][bin[j]] = {};
            }
            objBin[binLen - 1 - j][bin[j]][i] = true;
        }

    }

    const binPos = Object.keys(objBin).sort((a, b) => b - a);
    const maxLenBins = objBin[binPos[0]][[1]];
    let res = 0;


    return res;
};


console.log(findMaximumXOR([3,10,5,25,2,8]))
