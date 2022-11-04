import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Contact from "./components/contact";
import MyWork from "./components/MyWork";

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <MyWork></MyWork>
       <Contact></Contact>
      </main>
    </div>
  );
}

export default App;