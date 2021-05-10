import React from "react";

export default function string() {
  const stringData = "21-04-01";
  const subStringData = stringData.substring(6, 8);
  const numbetData = Number(subStringData);
  const nemNumber = numbetData + 1;
  console.log("subSting: ", nemNumber);

  const nemTest = Number(stringData);
  console.log("4", nemTest);

  return (
    <div>
      <h1>String</h1>
    </div>
  );
}
