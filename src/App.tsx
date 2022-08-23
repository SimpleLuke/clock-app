import React, { useState } from "react";
import Card from "./components/Card";
import Quote from "./components/Quote";
import Info from "./components/Info";
import Expand from "./components/Expand";

// import sunIcon from "./assets/desktop/icon-sun.svg";

function App() {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [expandData, setExpandData] = useState<{}>();
  const [isNight, setIsNight] = useState(false);

  const expandCardDetail = (obj: {
    timeZone: string;
    year: number;
    week: number;
    number: number;
  }) => {
    setExpandData(obj);
  };

  const toggleHandler = () => {
    setIsToggled((prev) => !prev);
  };

  const nightMode = () => {
    setIsNight(true);
  };
  return (
    <Card isNight={isNight}>
      <Quote isToggled={isToggled} />
      <Info
        expandData={expandCardDetail}
        toggle={toggleHandler}
        isToggled={isToggled}
        nightMode={nightMode}
      />
      <Expand
        isToggled={isToggled}
        timeZone={""}
        year={0}
        week={0}
        number={0}
        {...expandData}
      />
    </Card>
  );
}

export default App;
