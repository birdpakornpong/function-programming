import React from "react";

export default function usecontext() {
  const Child = ({ title }) => (
    <div>
      <h1>here is {title}</h1>
    </div>
  );

  const Parent = (props) => (
    <div>
      <Child title="I AM BIRD" />
    </div>
  );
  return (
    <div>
      <h1>useContext</h1>
      <Parent />
    </div>
  );
}
