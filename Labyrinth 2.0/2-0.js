sizef = [5, 5]

var arr = [
  ["#", "#", "#", "#", "#"],
  ["#", "S", "#", ".", "E"],
  ["#", ".", ".", ".", "#"],
  ["#", ".", "#", ".", "#"],
  ["#", ".", "#", "#", "#"],
];

arr = SearchPath(arr, sizef);

function SearchPath(arr, size) {
  const startPoint = FindFirstCoincidenceInMatrix(arr);
  if (startPoint == null) throw new Error('NullStartPoint');

  var queueForCheaking = [];
  queueForCheaking = SearchFreePath(arr, startPoint, queueForCheaking, size);
  FindPath(arr, size, queueForCheaking);
}

function FindPath(arr, size, queueForCheaking) {
  while (queueForCheaking.length > 0) {
    const currentPoint = queueForCheaking[0];
    queueForCheaking.shift();
    arr[currentPoint[0]][currentPoint[1]] = '1';

    if (isDoor(arr, currentPoint, size)) {
      console.log("!!!");
      return true;
    };

    SearchFreePath(arr, currentPoint, queueForCheaking, size);
  }
}

function isDoor(arr, currentPoint, size) {
  const direction = [
    [0, 1], [0, -1],
    [1, 0], [-1, 0],
  ];
  const pointSidesNumber = 4;

  for (var i = 0; i < pointSidesNumber; i++) {
    var rowNumber = currentPoint[0] + direction[i][0];
    var colNumber = currentPoint[1] + direction[i][1];
    if (isNotBlocked(rowNumber, colNumber, size) && isValid(arr, rowNumber, colNumber)) {
      if (arr[rowNumber][colNumber] == "E") {
        return true;
      }
    }
  }

  return false;
}

function SearchFreePath(arr, currentPoint, queueForCheaking, size) {
  const direction = [
    [0, 1], [0, -1],
    [1, 0], [-1, 0],
  ];
  const pointSidesNumber = 4;
  const oldQueue = queueForCheaking;

  for (var i = 0; i < pointSidesNumber; i++) {
    var rowNumber = currentPoint[0] + direction[i][0];
    var colNumber = currentPoint[1] + direction[i][1];

    if (isNotBlocked(rowNumber, colNumber, size) && isValid(arr, rowNumber, colNumber)) {
      queueForCheaking.push([rowNumber, colNumber]);
    }
  }

  if (oldQueue.length == queueForCheaking) {
    deadlockHandling();
    return queueForCheaking = [];
  }

  return queueForCheaking;
}

function deadlockHandling() {
  arr[currentPoint[0]][currentPoint[1]] = '#';
  const clearArray = ClearVisited();
  SearchPath();
}

function ClearVisited() {
  
}

function isNotBlocked(rowNumber, colNumber, size) {
  const [row, col] = size;
  return rowNumber >= 0 && colNumber >= 0 && rowNumber < row && colNumber < col
}

function isValid(arr, rowNumber, colNumber) {
  const [wallSign, startPoint, visiterPoint] = ["#", "S", "1"];
  return arr[rowNumber][colNumber] != wallSign &&
    arr[rowNumber][colNumber] != startPoint &&
    arr[rowNumber][colNumber] != visiterPoint
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

function FindFirstCoincidenceInMatrix(arr, symbol = "S") {
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] == symbol) {
        return [row, col];
      }
    }
  }
}