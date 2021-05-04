import React from "react";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
//Router
import { Switch, Route } from "react-router-dom";

//global style
import GlobalStyle from "./components/GlobalStyled";
//importar google fonts
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work">
            <OurWork />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
