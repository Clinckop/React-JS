import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import Shop from './components/shop-components/shop'

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/"> 
              <Home/>
            </Route>
          </Switch>
          {/* <Route exact path="/" element={<Home/>} />
          <Route exact path="/shop" element={<Shop/>} /> */}
      </Router>
    </div>
  );
}

export default App;