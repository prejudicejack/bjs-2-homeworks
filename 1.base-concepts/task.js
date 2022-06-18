"use strict";

function solveEquation(a, b, c) {
  let arr;
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {
    arr = [];
  }

  else if (discriminant === 0) {
    let root = -b / (2 * a);
    arr = [root];
  }

  else if (discriminant > 0) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr = [root1, root2];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  function checkTypeOfValue(value) {
    if (typeof value !== 'number') {
      value = parseFloat(value, 10)
    }
    return value;
  }

  let percentCheck = checkTypeOfValue(percent);
  if (isNaN(percentCheck)){
    return "Параметр \"Процентная ставка\" содержит неправильное значение " + `"${percent}"`
  }

  let contributionCheck = checkTypeOfValue(contribution);
  if (isNaN(contributionCheck)){
    return "Параметр \"Начальный взнос\" содержит неправильное значение " + `"${contribution}"`
  }

  let amountCheck = checkTypeOfValue(amount);
  if (isNaN(amountCheck)){
    return "Параметр \"Общая стоимость\" содержит неправильное значение " + `"${amount}"`
  }

  let amountToBeReturned = amount - contribution;

  let startDate = Date.now();
  let endDate = +date;
  let totalMonths = Math.trunc((endDate - startDate) / 1000 / 60 / 60 / 24 / 30);

  let P = (percent * 1 / 12) / 100;
  let monthlyPayment = amountToBeReturned * (P + (P / (((1 + P) ** totalMonths) - 1)));

  totalAmount = monthlyPayment * totalMonths;

  return Number(totalAmount.toFixed(2));
}
