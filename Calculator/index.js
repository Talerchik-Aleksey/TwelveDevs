// const num = 91; // 30 seconds

for (let index = 0; index < 32; index++) {
    var count = 0;

    console.log("------------------------");
    getNumberOfOperation(index);
    console.log(count + " - " + index);
    console.log("------------------------");
} 

var queue = [];

function getNumberOfOperation(num, startNum = 1,) {
    operation = [2, 5, 3];

    if(num === 1) {
        return;
    }

    if (startNum === num) {
        count += 1;
    }
    for (let index = 0; index < operation.length; index++) {
        const element = operation[index];
        if (startNum < num) {
            if (index < 2 && startNum + element <= num) {
                console.log(`+ ${element} | ${startNum}`)
                getNumberOfOperation(num, startNum + element);
            } else if (index === 2 && startNum * element <= num) {
                console.log(`* ${element} | ${startNum}`)
                getNumberOfOperation(num, startNum * element);
            }
        }
    }
}