import React from "react";
import "./App.css";
import { Growth } from "./Views/Growth";
import GlobalFonts from "./assets/fonts/fonts";
import { SiteWrapper } from "./styles";

function App() {
  return (
    <SiteWrapper>
      <GlobalFonts />
      <Growth />
    </SiteWrapper>
  );
}

export default App;
