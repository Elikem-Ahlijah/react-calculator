import React from 'react';
import './App.css';
import First_row from './first-row-component';
import Second_row from './second-row-components';
import Third_row from './third-row-component';
import Fourth_row from './fourth-row-component';
import Fifth_row from './fifth-row-component'
import Final_row from './final-row-component';

function App() {
  return (
    <div  className = 'container'>
      <First_row/>
      <Second_row/>
      <Third_row/>
      <Fourth_row/>
      <Fifth_row/>
      <Final_row/>
    </div>
  );
}

export default App;
