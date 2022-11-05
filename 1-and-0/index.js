const START_POINT = 10000;

let arrayOfSolutions = CalculateMathSolution(START_POINT);

let number = 345456567;

for (let number = 0; number < 100; number++) 
  console.log(arrayOfSolutions[number] + " " + number);



function CalculateMathSolution(find, to = 20_000_000) {
	// solutionArray with values when formula does't work 
	let solutionArray = [0, 1, 3, 6, 12, 23, 43];

	for (let index = 7; index < to; index++) {
		solutionArray.push(`${
			(solutionArray[index - 1] / solutionArray[index - 2])
			* solutionArray[index - 1]}`);

		if (index === find) {
			console.log(solutionArray[index]);
		}
	}

	return solutionArray;
}
