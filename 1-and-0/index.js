	var MOD = 1000000007;
	
	// Function to return the count
	// of all possible valid strings
	function countStrings(N)
	{
		var i, j;
		
		var dp = Array(N+1).fill(0).map(x => Array(3).fill(0));
	
		// Fill 0's in the dp array
		for(i = 0; i < N + 1; i++)
		{
			for(j = 9; j < 3 ; j ++)
			{
				dp[i][j] = 0;
			}
		}
		
		// Base cases
		dp[1][0] = 1;
		dp[1][1] = 1;
		dp[1][2] = 0;
	
		for (i = 2; i <= N; i++)
		{
	
			// dp[i][j] = number of possible strings
			// such that '1' just appeared consecutively
			// j times upto the ith index
			dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] +
						dp[i - 1][2]) % MOD;
	
			// Taking previously calculated value
			dp[i][1] = dp[i - 1][0] % MOD;
			dp[i][2] = dp[i - 1][1] % MOD;
		}
	
		// Taking all possible cases that
		// can appear at the Nth position
		var ans = (dp[N][0] + dp[N][1] +
							dp[N][2]) % MOD;
        console.log(dp);
		return ans;
	}
	
// Driver code
var N = 10000000;
console.log(countStrings(N));

