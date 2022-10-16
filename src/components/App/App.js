import '../../index.css';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import MainScreen from '../MainScreen/MainScreen';
import SecondScreen from '../SecondScreen/SecondScreen';
import ChooseCharacter from '../ChooseCharacter/ChooseCharacter';

function App() {
  const [currentCharacter, setCurrentCharacter] = useState(1)
  const navigate = useNavigate();


  return (
    <Routes>
      <Route path="/"exact element={<MainScreen/>}/>
      <Route path="/start" exact element={<SecondScreen/>}/>
      <Route path="/choosecharacter" exact element={<ChooseCharacter/>}
      />
    </Routes>
  );
}

export default App;

