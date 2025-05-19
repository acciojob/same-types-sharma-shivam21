function isSameType(value1, value2) {
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }
  return typeof value1 === typeof value2;
}

// do not change the code below.
let input1 = prompt("Enter Start of the Range.");
let input2 = prompt("Enter End of the Range.");

let value1 = (input1 === "NaN") ? NaN : input1;
let value2 = (input2 === "NaN") ? NaN : input2;

alert(isSameType(value1, value2));
