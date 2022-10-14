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

 function changeCharacterState1(){
    setCurrentCharacter(1)
    document.getElementsByClassName(".buttonToChoose1").style.border = "border: 5px solid yellow;";
    console.log("Залупа")
 }
 function changeCharacterState2(){
    setCurrentCharacter(2)
 }
 function changeCharacterState3(){
  setCurrentCharacter(3)
 }
 function nextPage(){
  const gfgf = 4;
  if(currentCharacter = 1) {navigate("/jija1")}
  if(currentCharacter = 2) {navigate("/jija2")}
  if(currentCharacter = 3) {navigate("/jija3")}

  // ? currentCharacter = 1 : navigate("/jija")
  // ? currentCharacter = 2 : navigate("/jija2")  
  // ? currentCharacter = 3 : navigate("/jija3");
 }
  return (
    <Routes>
      <Route path="/"exact element={<MainScreen/>}/>
      <Route path="/start" exact element={<SecondScreen/>}/>
      <Route path="/choosecharacter" exact element={<ChooseCharacter/>} 
      changeCharacterState1={changeCharacterState1} 
      changeCharacterState2={changeCharacterState2} 
      changeCharacterState3={changeCharacterState3}
      nextPage={nextPage}
      />
    </Routes>
  );
}

export default App;

