import React, { useState, useEffect } from "react";

export default function hook() {
  const [count, setCount] = useState(0);
  console.log("count: ", count);
  useEffect(() => {
    document.title = `you click ${count} times`;
  });
  return (
    <div>
      <p>you click {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
