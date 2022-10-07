size = [5, 5]

var arr = [
  ["#", "#", "#", "#", "#"],
  ["#", "S", "#", ".", "E"],
  ["#", ".", ".", ".", "#"],
  ["#", ".", "#", ".", "#"],
  ["#", ".", "#", "#", "#"],
];

arr = SearchPath(arr, size);

function SearchPath(arr, size) {
  const startPoint = FindFirstCoincidenceInMatrix(arr);
  if (startPoint == null) throw new Error('NullStartPoint');

  let queue = [];
  SearchFreePath(arr, startPoint);
}

function SearchFreePath(arr, currentPoint) {
  const direction = [
    [0, 1], [0, -1],
    [1, 0], [-1, 0],
  ];
  const pointSidesNumber = 4;

  for (var i = 0; i < pointSidesNumber; i++) {
    var rowNumber = currentPoint[0] + direction[i][0];
    var colNumber = currentPoint[1] + direction[i][1];

    if (isNotBlocked(rowNumber, colNumber, size) && isValid(arr, rowNumber, colNumber)) {
      console.log(`${rowNumber} ${colNumber}`);
    }
  }
}

function isNotBlocked(rowNumber, colNumber, size) {
  const [row, col] = size;
  return rowNumber >= 0 && colNumber >= 0 && rowNumber < row && colNumber < col
}

function isValid(arr, rowNumber, colNumber) {
  const [wallSign, startPoint, visiterPoint] = ["#", "S", "1"];
  return arr[rowNumber][colNumber] != wallSign    &&
         arr[rowNumber][colNumber] != startPoint  &&
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