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
        }
      
        return;
    }

    for (z = 0; z < 2; z++) {
        dataArr[index] = z;
        ZeroOneGen(dataArr, digits, index + 1);
    }

    return score;
}

const inputNumber = '';
while(typeof number != "number")
number = prompt('Enter the number:') * 1;

var dataArrTemp = new Array(number);
var resalt = ZeroOneGen(dataArrTemp, number, 0);
alert(resalt);