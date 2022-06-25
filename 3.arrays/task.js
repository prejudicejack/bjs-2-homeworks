function compareArrays(arr1, arr2) {
  let result;
  result = (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]));
  
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter((number) => number % 3 === 0 && number > 0).map((number) => number * 10);

  return resultArr; // array
}
