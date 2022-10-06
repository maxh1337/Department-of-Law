import '../../index.css';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import MainScreen from '../MainScreen/MainScreen';
import SecondScreen from '../SecondScreen/SecondScreen';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();


  function GoNext(){
    let path = `/start`
    navigate(path)
  }

  return (
    <Routes>
      <Route path="/"exact element={<MainScreen/>} onClick={GoNext}></Route>
      <Route path="/start" exact element={<SecondScreen/>}></Route>
    </Routes>
  );
}

export default App;

