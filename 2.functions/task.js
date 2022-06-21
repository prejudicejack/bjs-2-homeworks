// Задание 1
function getArrayParams(arr1) {
  let min, max, sum, avg;
  min = arr1[0];
  max = arr1[0];
  sum = 0;

  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] > max) {
      max = arr1[i]; 
    }
    else if (arr1[i] < min) {
      min = arr1[i];
    };

    sum += arr1[i];
    avg = Number((sum / arr1.length).toFixed(2));
  }
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr2) {
  let sum = 0;
    for (let i = 0; i < arr2.length; i++) {
      sum += arr2[i];
    }
  return sum;
}


function makeWork(arr3, func) {
  let max = 0;
  let sum = 0;
  func = worker; 
  for (i = 0; i < arr3.length; i++) {
    for (j = 0; j < arr3[i].length - 1; j++) {
      sum = func(arr3[j]);
      if (sum > max) {
        max = sum; 
      }
    }
    return max;
  }
}


// Задание 3
function worker2(arr4) {
  let min2 = arr4[0];
  let max2 = arr4[0];
  for (let i = 1; i < arr4.length; i++) {
    if(arr4[i] < min2) {
      min2 = arr4[i] 
    }
    if(arr4[i] > max2) {
      max2 = arr4[i] 
    }
   }
return Math.abs(max2 - min2);
}


function makeWork2(arr5, func) {
  let max3 = 0;
  let sum3 = 0;
  func = worker2; 

  for (i = 0; i < arr5.length; i++) {
    for (j = 0; j < arr5[i].length-1; j++) {
      sum3 = func(arr5[j]);
      if (sum3 > max3) {
        max3 = sum3; 
      }
    } 
    return max3;
  }
}
