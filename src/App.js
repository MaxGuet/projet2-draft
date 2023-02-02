import Header from "./components/Header";
import "./App.css";
import React from "react";
import GamesList from "./components/container/GamesList";
import { useState } from "react";
import SideBarContainer from "./components/container/SideBarContainer";

function App() {
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <div>
      <Header searchValue={value} searchSetValue={setValue} />
      <GamesList searchValue={value} />
      <SideBarContainer />
    </div>
  );
}

export default App;
