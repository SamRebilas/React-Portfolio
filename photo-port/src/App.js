import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Contact from "./components/contact";
import MyWork from "./components/MyWork";
import Gallery from "./components/Gallery";
//import Header from "./components/header"
function App() {

  return (
    <div>
      {/* <Header></Header> */}
      <Nav></Nav>
      <main>
       
        <About></About>
        <MyWork></MyWork>
        <Gallery></Gallery>
       <Contact></Contact>
       
      </main>
    </div>
  );
}

export default App;