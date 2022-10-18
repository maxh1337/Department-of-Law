import '../../index.css';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import MainScreen from '../MainScreen/MainScreen';
import SecondScreen from '../SecondScreen/SecondScreen';
import ChooseCharacter from '../ChooseCharacter/ChooseCharacter';
import ChooseCharacter1 from '../ChooseCharacter1/ChooseCharacter1';
import ChooseCharacter2 from '../ChooseCharacter2/ChooseCharacter2';
import FinishedUniversity from '../FinishedUniversity/FinishedUniversity';
import First from '../1/1';
import Second from '../2/2';
import Third from '../3/3';
import ThirdE from '../3e/3e';
import ThirdExplanation from '../3explanation/3explanation';
import Four from '../4/4';

function App(){
  const [scale, setScale] = useState(1.53);

  window.addEventListener(`resize`, () => {
    const scale = setScale(getScale());
}, false);

const getScale = () => {
  const clientWidth = document.documentElement.clientWidth;
  const clientHeight = document.documentElement.clientHeight;
  if (clientWidth > clientHeight) {
      return clientHeight / 610;
  } else {
      return clientWidth / 640;
  }
}

  return (
    <div className='App' style={{transform: 'scale(' + scale + ')'}}>
    <Routes>
      <Route path="/"exact element={<MainScreen/>}/>
      <Route path="/start" exact element={<SecondScreen/>}/>
      <Route path="/choosecharacter" exact element={<ChooseCharacter/>}/>
      <Route path='/choosecharacter1' exact element={<ChooseCharacter1/>}/>
      <Route path='/choosecharacter2' exact element={<ChooseCharacter2/>}/>
      <Route path='/finisheduniversity' exact element={<FinishedUniversity/>}/>
      <Route path='/1' exact element={<First/>}/>
      <Route path='/2' exact element={<Second/>}/>
      <Route path='/3' exact element={<Third/>}/>
      <Route path='/3e' exact element={<ThirdE/>}/>
      <Route path='/3explanation' exact element={<ThirdExplanation/>}/>
      <Route path='/4' exact element={<Four/>}/>
    </Routes>
    </div>
  );
}

export default App;

