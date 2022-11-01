const START_POINT = 10000;

let arrayOfSolutions = CalculateMathSolution(START_POINT);

let number = 345456567;

// console.log(arrayOfSolutions[89000000]);



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

const MOD = 1_000_000_007;

function countStrings(N) {
	var i, j;

	var array = Array(N + 1).fill(0).map(x => Array(3).fill(0));

	for (i = 0; i < N + 1; i++) {
		for (j = 0; j < 3; j++) {
			array[i][j] = 0;
		}
	}

	array[1][0] = 1;
	array[1][1] = 1;
	array[1][2] = 0;

	for (i = 2; i <= N; i++) {
		array[i][0] = (array[i - 1][0] + array[i - 1][1] +
			array[i - 1][2]) % MOD;

		array[i][1] = array[i - 1][0] % MOD;
		array[i][2] = array[i - 1][1] % MOD;
	}

	var ans = (array[N][0] + array[N][1] +
		array[N][2]) % MOD;

	return ans - 1;
}

for (i = 1; i < 100; i++) {
	console.log(countStrings(i) + ' ' + i);
}