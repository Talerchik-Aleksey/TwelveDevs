size = [5, 5]

var arr = [
  ["#", "#", "#", "#", "#"],
  ["#", "S", "#", "#", "#"],
  ["#", ".", ".", ".", "#"],
  ["#", ".", "#", ".", "#"],
  ["#", "#", "#", "E", "#"],
];

const path = SearchPath(arr, size);
console.log(path);

function SearchPath(arr, size) {
  const startPoint = FindFirstCoincidenceInMatrix(arr);
  if (startPoint == null) throw new Error(`NullStartPoint ${arr}`);

  var queueForCheaking = [];
  queueForCheaking = SearchFreePath(arr, startPoint, queueForCheaking, size);
  const result = FindPath(arr, size, queueForCheaking);
  console.log(result);
  const path = getPath(result, size);
  return path;
}

function getPath(arr, size) {
  const startPoint = FindFirstCoincidenceInMatrix(arr);
  if (startPoint == null) throw new Error(`NullStartPoint ${arr}`);
  let path = [];
  let queueForCheaking = []
  queueForCheaking.push(startPoint);

  while (queueForCheaking.length > 0) {
    const currentPoint = queueForCheaking[0];
    queueForCheaking.shift();

    arr[currentPoint[0]][currentPoint[1]] = '2';

    const direction = [
      [0, 1], [0, -1],
      [1, 0], [-1, 0],
    ];
    const pointSidesNumber = 4;

    for (var i = 0; i < pointSidesNumber; i++) {
      var rowNumber = currentPoint[0] + direction[i][0];
      var colNumber = currentPoint[1] + direction[i][1];

      if (isNotBlocked(rowNumber, colNumber, size) && isValid(arr, rowNumber, colNumber, ["#", "S", "2", "E"])) {
        queueForCheaking.push([rowNumber, colNumber]);
        switch (i) {
          case 0:
            path.push('r')
            break;
          case 1:
            path.push('l')
            break;
          case 2:
            path.push('d')
            break;
          case 3:
            path.push('u')
            break;
          default:
            break;
        }
        if (isDoor(arr, [currentPoint[0], currentPoint[1]], size))
          break;
      }
    }
  }
  return path;
}

function FindPath(arr, size, queueForCheaking) {
  while (isDoor(arr, queueForCheaking[0], size) == false) {
    const currentPoint = queueForCheaking[0];
    queueForCheaking.shift();
    arr[currentPoint[0]][currentPoint[1]] = '1';
    if (SearchFreePath(arr, currentPoint, queueForCheaking, size) == false) break;
  }
  return arr;
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
        arr[currentPoint[0]][currentPoint[1]] = "1";
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
  const oldQueue = queueForCheaking.length;

  for (var i = 0; i < pointSidesNumber; i++) {
    var rowNumber = currentPoint[0] + direction[i][0];
    var colNumber = currentPoint[1] + direction[i][1];

    if (isNotBlocked(rowNumber, colNumber, size) && isValid(arr, rowNumber, colNumber)) {
      if (isDoor(arr, [rowNumber, colNumber], size))
        return false;
      queueForCheaking.push([rowNumber, colNumber]);
    }
  }

  if (oldQueue == queueForCheaking.length) {
    deadlockHandling(arr, currentPoint, size);
    return queueForCheaking = [];
  }

  return queueForCheaking;
}


function deadlockHandling(arr, currentPoint, size) {
  arr[currentPoint[0]][currentPoint[1]] = '#';
  const clearArray = ClearVisited(arr, size);
  SearchPath(clearArray, size);
}

function isNotBlocked(rowNumber, colNumber, size) {
  const [row, col] = size;
  return rowNumber >= 0 && colNumber >= 0 && rowNumber < row && colNumber < col
}

function isValid(arr, rowNumber, colNumber, stopSymbols = ["#", "S", "1"]) {
  const [wallSign, startPoint, visiterPoint, EndPoint] = stopSymbols;
  return arr[rowNumber][colNumber] != wallSign &&
    arr[rowNumber][colNumber] != startPoint &&
    arr[rowNumber][colNumber] != visiterPoint &&
    arr[rowNumber][colNumber] != EndPoint
}

function ClearVisited(arr, size) {
  const [rowSize, colSize] = size;
  for (let row = 0; row < rowSize; row++) {
    for (let col = 0; col < colSize; col++) {
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