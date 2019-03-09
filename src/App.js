import React, { Component } from 'react';
import Main from './components/main';
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';

class App extends Component { 

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
        <Route exact path='/' component={() => <Main />} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
