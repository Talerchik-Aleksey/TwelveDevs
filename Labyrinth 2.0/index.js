const START_POINT = "S";

function isPath(arr) {
  var direction = [
    [0, 1], [0, -1],
    [1, 0], [-1, 0],
  ];

  const startPoint = [];
  startPoint.push(...GetStartPoint(arr, "S"));
  var queue = [];

  for (var i = 0; i < 4; i++) {
    var a = startPoint[0] + direction[i][0];
    var b = startPoint[1] + direction[i][1];
    // Not blocked and valid
    if (a >= 0 && b >= 0 && a < row && b < col &&
      arr[a][b] != "#" && arr[a][b] != "S" && arr[a][b] != "1") {
      if (arr[a][b] == "E") return arr;
      queue.push([a, b]);
    }
  }

  while (queue.length > 0) {
    var currentNode = queue[0];
    arr[currentNode[0]][currentNode[1]] = "1";
    queue.shift();
    var queueStart = queue.length;
    var stopFalg = false
    for (var i = 0; i < 4; i++) {
      var a = currentNode[0] + direction[i][0];
      var b = currentNode[1] + direction[i][1];
      if (a >= 0 && b >= 0 && a < row && b < col &&
        arr[a][b] != "#" && arr[a][b] != "S" && arr[a][b] != "1") {
        if (arr[a][b] == "E") { stopFalg = true }
        if (!stopFalg) { queue.push([a, b]); }
      }
    }
    if (queue.length == queueStart) {
      arr[currentNode[0]][currentNode[1]] = "#";
      arr = ClearVisited(arr);
      isPath(arr);
    }
  }
  return arr;
}

function ClearVisited(arr) {
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] == '1') {
        arr[row][col] = '.'
      }
    }
  }
  return arr;
}

function GetStartPoint(arr, symbol) {
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] == symbol) {
        return [row, col];
      }
    }
  }
}

var row = 5;
var col = 5;

var arr = [
  ["#", "#", "#", "#", "#"],
  ["#", "S", "#", ".", "E"],
  ["#", ".", ".", ".", "#"],
  ["#", ".", "#", ".", "#"],
  ["#", ".", "#", "#", "#"],
];

arr = isPath(arr);
console.log(arr);
