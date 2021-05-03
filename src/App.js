import React from "react";
import AboutUs from "./pages/AboutUs";
//global style
import GlobalStyle from "./components/GlobalStyled";
//importar google fonts
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
