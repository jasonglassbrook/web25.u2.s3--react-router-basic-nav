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
    <Navigation />
  </div>
);

/**************************************/
export default App;
