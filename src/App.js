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
    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>
  </div>
);

/**************************************/
export default App;
