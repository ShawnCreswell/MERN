
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import HeroList from "./components/HeroList";
import Home from "./components/Home";
import "./lux.css";
import Menu from "./components/Menu";
import HeroDisplay from "./components/HeroDisplay";
import { randSuperhero } from '@ngneat/falso';
import { useState } from "react";

// randSuperhero()
// randSuperhero({company: 'Marvel' })
// randSuperhero({ length: 10 })


const container = {
  width: '70%',
  margin: '20px auto'
}

const App = () => {
  const [heroes, setHeroes] = useState(randSuperhero({ length:10 }))

  return (
    <div style={ container } >
      <div className="text-center">
        <h1>Routing Example</h1>
        <fieldset>
          <legend>App</legend>
        </fieldset>
      </div>
      <Menu />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/heroes" element={<HeroList heroes={heroes} />} />
        <Route path="heroes/:id" element={<HeroDisplay heroes={heroes}/>} />
      </Routes>
    </div>
  );
};

export default App;
