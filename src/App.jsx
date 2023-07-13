import Header from "./components/Header/Header";
import Hero   from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import Residencies from "./components/Residencies/Residencies";

import "./App.css"

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header/>
        <Hero/>
      </div>
      <Brands/>
      <Residencies/>
    </div>
  );
}

export default App;
