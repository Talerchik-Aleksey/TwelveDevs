// const num = 91; // 30 seconds
// Current index / past index * 1.2 * number of operation past index


let array = CalculateMathSolution();

console.log(array);



function CalculateMathSolution(to = 9_999_999) {
    let solutionArray = [];
    solutionArray[19] = 33;
    for (let index = 20; index < to; index++) {
        solutionArray.push((index / (index - 1)) * 1.15 * solutionArray[index - 1]);
    }

    return solutionArray;
}

// for (let index = 0; index < 32; index++) {
//     var count = 0;

//     console.log("------------------------");
//     getNumberOfOperation(index);
//     console.log(count + " - " + index);
//     console.log("------------------------");
// }

// function getNumberOfOperation(num, startNum = 1,) {
//     operation = [2, 5, 3];

//     if(num === 1) {
//         return;
//     }

//     if (startNum === num) {
//         count += 1;
//     }
//     for (let index = 0; index < operation.length; index++) {
//         const element = operation[index];
//         if (startNum < num) {
//             if (index < 2 && startNum + element <= num) {
//                 console.log(`+ ${element} | ${startNum}`)
//                 getNumberOfOperation(num, startNum + element);
//             } else if (index === 2 && startNum * element <= num) {
//                 console.log(`* ${element} | ${startNum}`)
//                 getNumberOfOperation(num, startNum * element);
//             }
//         }
//     }
// }
