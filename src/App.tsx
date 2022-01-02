import React from "react";
import "./App.css";
import { Growth } from "./Views/Growth";
import GlobalFonts from "./assets/fonts/fonts";

function App() {
  return (
    <div className="App">
      <GlobalFonts />
      <Growth />
    </div>
  );
}

export default App;
