function isSameType(value1, value2) {
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }
  return typeof value1 === typeof value2;
}

// Get inputs from user
let input1 = prompt("Enter Start of the Range.");
let input2 = prompt("Enter End of the Range.");

// Convert both inputs to numbers
let value1 = Number(input1);
let value2 = Number(input2);

alert(isSameType(value1, value2));
