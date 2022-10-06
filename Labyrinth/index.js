var row = 5;
var col = 5;

function isPath(arr) {
  var direction = [
    [0, 1], [0, -1],
    [1, 0], [-1, 0],
  ];

  var queue = [];

  // Insert the top right corner.
  queue.push([0, 0]);

  // Until queue is empty
  while (queue.length > 0) {
    var currentNode = queue[0];
    queue.shift();

    // Mark as visited
    arr[currentNode[0]][currentNode[1]] = -1;

    // Check all four directions
    for (var i = 0; i < 4; i++) {
      // Using the direction array
      var a = currentNode[0] + direction[i][0];
      var b = currentNode[1] + direction[i][1];

      // Not blocked and valid
      if (a >= 0 && b >= 0 && a < row && b < col && arr[a][b] != -1) {
        if (arr[a][b] == 1) return true;
        queue.push([a, b]);
      }
    }
  }
  return false;
}

var arr = [
  [0, 0, 0, -1, 0],
  [-1, 0, 0, -1, -1],
  [0, 0, 0, -1, 0],
  [-1, 0, 0, 0, 1],
  [0, 0, -1, -1, -1],
];

if (isPath(arr)) {
  console.log("Yes");
} else {
  console.log("No");
}
