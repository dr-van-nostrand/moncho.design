import React from "react";
import AboutUs from "./pages/AboutUs";
//global style
import GlobalStyle from "./components/GlobalStyled";
//importar google fonts

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
