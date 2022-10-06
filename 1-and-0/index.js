var score = -1;

function ZeroOneGen(dataArr, digits, index, ) {
    var i, z;
    if (index == digits) {
        var str = "";
        for (i = 0; i < digits; i++) {
            str = str + dataArr[i];
        }
        if (!str.match(/111/)) {
            score += 1;
            console.log(str);
        }
        return;
    }

    for (z = 0; z < 2; z++) {
        dataArr[index] = z;
        ZeroOneGen(dataArr, digits, index + 1);
    }

    return score;
}

var dataArrTemp = new Array(2);
var resalt = ZeroOneGen(dataArrTemp, 2, 0);
console.log(resalt);