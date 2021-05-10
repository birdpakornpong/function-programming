import React from "react";
import UseContextDemoChild1 from "./UseContextDemoChild1";
import ThemeContext from "./ThemeContext";

export default function UseContextDemo1() {
  return (
    <div>
      <ThemeContext.Provider value="red">
        <UseContextDemoChild1 />
      </ThemeContext.Provider>
    </div>
  );
}
