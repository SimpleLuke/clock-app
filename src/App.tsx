import React, { useState } from "react";
import Card from "./components/Card";
import Quote from "./components/Quote";
import Info from "./components/Info";
import Expand from "./components/Expand";

// import sunIcon from "./assets/desktop/icon-sun.svg";

function App() {
  const [isToggled, setIsToggled] = useState<boolean>(true);

  const toggleHandler = () => {
    setIsToggled((prev) => !prev);
  };
  return (
    <Card>
      <Quote isToggled={isToggled} />
      <Info toggle={toggleHandler} isToggled={isToggled} />
      <Expand />
    </Card>
  );
}

export default App;
