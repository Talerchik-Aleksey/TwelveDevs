const num = 90; // 30 seconds
let count = 0;

getNumberOfOperation(1, num);
console.log(count);

function getNumberOfOperation(startNum = 1, num) {
    operation = [2, 5, 3];
    if (startNum == num) {
        count += 1;
    }

    for (let index = 0; index < operation.length; index++) {
        const element = operation[index];
        if (startNum < num) {
            if (index < 2 && startNum + element <= num) {
                getNumberOfOperation(startNum + element, num);
            } else if (index === 2 && startNum * element <= num) {
                getNumberOfOperation(startNum * element, num);
            }
        }
    }
}