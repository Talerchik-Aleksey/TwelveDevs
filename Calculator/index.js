// const num = 91; // 30 seconds
// Current index / past index * 1.2 * number of operation past index


let array = CalculateMathSolution();

for (let number = 0; number < 31; number++) 
console.log(array[number] + " " + number);

function CalculateMathSolution(to = 10_999_999) {
    let solutionArray = [];
    solutionArray[19] = 33;
    solutionArray[18] = 25;

    for (let index = 20; index < to; index++) {
            solutionArray.push(formula(index));
    }

    return solutionArray;

    function formula(index) {
        return ((index / (index - 1)) * 1.2021212) * solutionArray[index - 1];
    }
}

console.log("--------------");
for (let index = 0; index < 90; index++) {
    var count = 0;

    getNumberOfOperation(index);
    console.log(count + "  " + index);
}

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
                 getNumberOfOperation(num, startNum + element);
             } else if (index === 2 && startNum * element <= num) {
                 getNumberOfOperation(num, startNum * element);
             }
         }
     }
 }
