import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Headline from './Components/Headline/Headline';
import Projects from './Components/Projects/Projects';


function App() {
  return (
    <div className="App">
      <Headline/>
      <Projects/>
      {/* <About/> */}
    </div>
  );
}

export default App;
