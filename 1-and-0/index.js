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

for (i = 1; i < 20; i++) {
	console.log(countStrings(i) + ' ' + i);
}

