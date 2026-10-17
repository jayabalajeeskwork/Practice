import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

import Dashboard from "./component/Dashboard";
import Counter from "./component/Counter";
import Petrol from "./component/Petrol";
import Train from "./component/Train";

function App() {
  return (
    <>
      {/* <Petrol/> */}
      <Train />
    </>
  );
}

export default App;
