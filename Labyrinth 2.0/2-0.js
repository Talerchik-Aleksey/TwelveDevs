size = [5, 5]

var arr = [
  ["#", "S", "#", ".", "#"],
  ["#", ".", ".", ".", "#"],
  [".", ".", ".", ".", "#"],
  ["#", ".", ".", ".", "#"],
  [".", "#", "#", "E", "#"],
];

const direction = [
  [0, 1], [0, -1],
  [1, 0], [-1, 0],
];

try{
  const res = SearchPath();
  console.log(res);
} catch(e) {
  console.log(e.message);
}

function SearchPath() {
  const startNode = FindFirstCoincidenceInMatrix(arr);
  if (startNode === undefined) throw new Error("Not found start point");

  let currentNode = startNode;
  let Path = [];

  let visitedNumber = 1;

  while (arr[currentNode[0]][currentNode[1]] != 'E') {
    if (arr[currentNode[0]][currentNode[1]] != 'S') {
      arr[currentNode[0]][currentNode[1]] = visitedNumber;
    }

    for (var i = 0; i < 4; i++) {
      var rowNumber = currentNode[0] + direction[i][0];
      var colNumber = currentNode[1] + direction[i][1];

      if (isNotBlocked(rowNumber, colNumber, size) && isValid(arr, rowNumber, colNumber, ["#", "S", visitedNumber])) {

        switch (i) {
          case 0:
            Path.push('r')
            break;
          case 1:
            Path.push('l')
            break;
          case 2:
            Path.push('d')
            break;
          case 3:
            Path.push('u')
            break;
        }
        i = 4; // Stop For
        currentNode = [rowNumber, colNumber];
      }
    }

    if (isStop(arr, currentNode,  ["#", "S", visitedNumber]) && arr[currentNode[0]][currentNode[1]] != "E") {
      arr[currentNode[0]][currentNode[1]] = '#';
      visitedNumber += 1;
      Path = [];
      currentNode = FindFirstCoincidenceInMatrix(arr);
    }

    if (arr[rowNumber][colNumber] == "E") {
      break;
    }
  }
  return Path;
}

function ClearVisited() {
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

function isStop(arr, currentNode, stopSymbols = ["#", "S", "1"]) {
  result = true;

  for (var i = 0; i < 4; i++) {
    var rowNumber = currentNode[0] + direction[i][0];
    var colNumber = currentNode[1] + direction[i][1];

    if (isNotBlocked(rowNumber, colNumber, size) && isValid(arr, rowNumber, colNumber, stopSymbols)) {
      result = false;
    }
    if (arr[currentNode[0]][currentNode[1]] == "E") {
      result = false;
      i = Number.MAX_VALUE;
    }
  }
  return result;
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