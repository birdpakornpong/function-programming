import React from "react";

export default function promisetest() {
  let myPromise = Promise.resolve(1);

  let takeLongTask = (value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("parameter: ", value);
        resolve(value + "*");
      }, 1000);
    });
  };

  let takeLongTaskPush = (value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("parameter from taskLongTask: ", value);
        resolve(value + " + ");
      }, 1000);
    });
  };

  let takeText = (value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("parameter from taskLongTaskPuchText: ", value);
        resolve(value + " final");
      }, 1000);
    });
  };

  let takeLongTaskPuchText = (value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("parameter from taskLongTaskPush: ", value);
        resolve(value + "2");
      }, 1000);
    });
  };
  let execute = async () => {
    await myPromise
      .then((result) => {
        console.log("result: ", result);
        return result;
      })
      .then((result) => {
        console.log("result from task 1: ", result);
        return takeLongTask(result);
      })
      .then((result) => {
        console.log("result from task 2:", result);
        return takeLongTaskPush(result);
      })
      .then((result) => {
        console.log("result from task 3:", result);
        return takeLongTaskPuchText(result);
      })
      .then((result) => {
        console.log("result from task 4:", result);
        return takeLongTask(result);
      })
      .then((result) => {
        console.log("result from task 5: ", result);
        return takeText(result);
      })
      .then((result) => {
        console.log("result from task 6: ", result);
      });
  };
  execute();
  return (
    <div>
      <h1>Promise Pro</h1>
    </div>
  );
}
