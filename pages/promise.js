import React from "react";

export default function promise() {
  let myPromise = new Promise(function (resolve, reject) {
    console.log("Promise Function");
  });

  let resolveCall = new Promise(function (resolve, reject) {
    resolve(1);
  });
  resolveCall.then(function (result, err) {
    console.log(`result: ${result}`);
  });
  console.log(resolveCall);

  // let rejectCall = new Promise(function (resolve, reject) {
  //   reject(new Error("เกิดข้อผอดพลาด"));
  // });
  // console.log(rejectCall);

  async function explicitReturnPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(79);
      }, 4000);
    });
  }

  explicitReturnPromise().then((result) => {
    console.log(result);
  });

  async function implicitReturnPromise() {
    return 4;
  }
  implicitReturnPromise().then((result, err) => {
    console.log(result);
  });

  let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise1 = 1500"), 1500);
  });
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise2 = 500"), 500);
  });
  let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise3 = 4000"), 4000);
  });
  let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise4 = 3000"), 3000);
  });

  async function execute() {
    promise1.then((result) => {
      console.log(result);
    });
    promise2.then(function (result) {
      console.log(result);
    });
    promise3.then((result) => {
      console.log(result);
    });
    promise4.then(function (result) {
      console.log(result);
    });
  }

  async function executeAwait() {
    await promise1.then((result) => {
      console.log("await", result);
    });
    await promise2.then(function (result) {
      console.log("await", result);
    });
    await promise3.then((result) => {
      console.log("await", result);
    });
    await promise4.then(function (result) {
      console.log("await", result);
    });
  }

  execute();
  executeAwait();

  let Execute = async () => {
    const result = await promise1;
    console.log("Execute", result);
  };
  Execute();

  let promiseAll = async () => {
    const allPromise = await Promise.all([
      promise1,
      promise2,
      promise3,
      promise4,
    ]);
    console.log("AllPromise: ", allPromise);
  };
  promiseAll();

  return (
    <div>
      <h1>Promise คือ ?</h1>
    </div>
  );
}
