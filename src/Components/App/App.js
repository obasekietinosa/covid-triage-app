import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import Quiz from '../Question/Quiz';
import Default from '../Default';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Quiz } />
            <Route component={ Default } />
          </Switch>
        </BrowserRouter>
        
        <Footer />
      </div>
    );
  }
}

export default App;