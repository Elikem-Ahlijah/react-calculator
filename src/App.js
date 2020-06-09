import React from 'react';
import './App.css';
import First_row from './first-row-component';
import Second_row from './second-row-components';
import Final_row from './final-row-component';

function App() {
  return (
    <div  className = 'container'>
      <First_row/>
      <Second_row/>
      <Second_row/>
      <Second_row/>
      <Second_row/>
      <Final_row/>
    </div>
  );
}

export default App;
