import React from 'react';
import logo from '../logo.svg';//REPLACE
import '../styles/App.css';//ALTER CSS USING SCSS
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' // TODO: Look up to see if this is required for Bootstrap IF I import the styling file

/* The following line can be included in your src/index.js or App.js file if needed TODO: */

import './App.scss';



function App() {
  return (
    <BrowserRouter> (//<> </>THIS IS CALLED A FRAGMENT TAG TO ALLOW RETURN OF MORE THAN ONE THING: TODOlist & input) 
    <navbar />
    <input type="text" /> (//Placeholder)

    <Switch>
    </Switch>

    </BrowserRouter>
  )
  //SAMPLE
  // (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // )
}

export default App;
