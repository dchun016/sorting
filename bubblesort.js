const swap = (arr, j) => {
  let initialEle = arr[j];
  arr[j] = arr[j + 1];
  arr[j + 1] = initialEle;
};

const compareFunction = function(num1, num2) {
  if(num1>num2) {return true}
  else {return false}
}

const bubbleSort = arr => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (compareFunction(arr[j], arr[j+1])) {
        swap(arr, j);
      }
    }
  }
  return arr;
};

module.exports = bubbleSort;
