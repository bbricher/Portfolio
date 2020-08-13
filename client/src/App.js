import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

// import About from './pages/About';
import Headline from './Components/Headline/Headline';
import ProjectCards from './Components/Bootstrap/ProjectCards';

import Projects from './Components/Projects/Projects';
import Connect from './Components/Connect/Connect';
import JumboImage from './Components/JumboImage/JumboImage';


function App() {
  return (
    <div className="App">
      <Container>
        <JumboImage/>
        {/* <ProjectCards/> */}
      
        {/* <About/> */}
      </Container>
    </div>
  );
}

export default App;
