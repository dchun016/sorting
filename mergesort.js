function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  let center = Math.floor(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, center);
  let secondHalf = wholeArray.slice(center);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let finalArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < arr1.length && rightIndex < arr2.length) {
    if (arr1[leftIndex] >= arr2[rightIndex]) {
      finalArr.push(arr2[rightIndex]);
      rightIndex++;
    } else {
      finalArr.push(arr1[leftIndex]);
      leftIndex++;
    }
  }
  if (leftIndex > arr1.length - 1) {
    finalArr = [...finalArr, ...arr2.slice(rightIndex)];
  }

  if (rightIndex > arr2.length - 1) {
    finalArr = [...finalArr, ...arr1.slice(leftIndex)];
  }
  return finalArr;
}

function mergeSort(arr) {
  let splitArr;
  if (arr.length === 1) {
    return arr;
  } else {
    splitArr = split(arr);
  }
  return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]));
}

module.exports = {
  split,
  merge,
  mergeSort,
};
