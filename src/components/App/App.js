import logo from '../../logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainScreen from '../MainScreen/MainScreen';

function App() {


  
  return (
    <Routes>
      <Route path='/' exact element={MainScreen}>
        
        {/* <MainScreen/> */}
      </Route>
    </Routes>
  );
}

export default App;


{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}

