import React from "react";

// 1. pure function
function addPure(a, b) {
  return a + b;
}
console.log("add: ", addPure(2, 7));
// 3. first class function
// 3.1 assigning a function to a variable
const addAssing = function addAssigning(a, b) {
  return a + b;
};
console.log("addAssign: ", addAssing(2, 7));
// 3.2 returning a function
function addReturn(a, b) {
  return function () {
    return a + b;
  };
}
const addTwoNumber = addReturn(2, 7);
console.log("addReturn: ", addTwoNumber); // ได้ผลลัพธ์เป็น function
console.log("addReturn: ", addTwoNumber()); // 9

// 3.3 accepting a function as an argument
function addArgument(a, b) {
  return a + b;
}
function addAccep(add, a, b) {
  return add(a, b);
}
console.log("addAccep: ", addAccep(addArgument, 2, 7));

export default function index() {
  return (
    <div>
      <h1>Function Programming</h1>
    </div>
  );
}
