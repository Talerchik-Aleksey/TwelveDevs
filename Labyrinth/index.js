const START_POINT = 'S';

function isPath(arr) {
  var direction = [
    [0, 1], [0, -1],
    [1, 0], [-1, 0],
  ];

  var queue = [];

  queue.push(GetStartPoint(arr, START_POINT));

  while (queue.length > 0) {
    var currentNode = queue[0];
    queue.shift();

    // Mark as visited
    arr[currentNode[0]][currentNode[1]] = '#';

    // Check all four directions
    for (var i = 0; i < 4; i++) {
      // Using the direction array
      var a = currentNode[0] + direction[i][0];
      var b = currentNode[1] + direction[i][1];

      // Not blocked and valid
      if (a >= 0 && b >= 0 && a < row && b < col && arr[a][b] != '#') {
        if (arr[a][b] == 'E') return true;
        queue.push([a, b]);
      }
    }
  }
  return false;
}

function GetStartPoint(arr, symbol) {
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] == symbol) {
        return [row, col]
      }
    }
  }
}

var row = 5;
var col = 5;

var arr = [
  ['#', 'S', '#', '#', '#'],
  ['#', '.', '#', '.', 'E'],
  ['#', '.', '#', '.', '#'],
  ['#', '.', '.', '.', '#'],
  ['#', '#', '#', '#', '#'],
];

if (isPath(arr)) {
  console.log("Yes");
} else {
  console.log("No");
}
