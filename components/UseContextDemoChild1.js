import React from "react";
import ThemeContext from "./ThemeContext";
export default function UseContextDemoChild1() {
  const colorUseContext = React.useContext(ThemeContext);
  return (
    <div>
      <ThemeContext.Consumer>
        {(color) => <h1 style={{ color }}>Color is {color}</h1>}
      </ThemeContext.Consumer>
      <h2>{colorUseContext}</h2>
    </div>
  );
}
