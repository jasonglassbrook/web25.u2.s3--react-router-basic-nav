/// external modules ///
import React from 'react';
import { Route } from 'react-router-dom';

/// internal modules ///
import { Home, About, Contact, Navigation } from './components';

/// styles ///
import './App.css';

/***************************************
  COMPONENT
***************************************/
const App = () => (
  <div>
    <Navigation/>
    <Route exact path='/' component={}/>
    <Route path='/about' component={}/>
    <Route path='/contact' component={}/>
  </div>
);

/**************************************/
export default App;
