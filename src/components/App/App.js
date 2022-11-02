import '../../index.css';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
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
import Four from '../4/4';
import Error from '../error/error';
import Five from '../5/5';
import Six from '../6/6';
import Seven from '../7/7';
import Eight from '../8/8';
import Nine from '../9/9';
import Ten from '../10/10';
import Eleven from '../11/11';
import Twelve from '../12/12';
import Thirteen from '../13/13';
import Fourteen from '../14/14';
import Fifthteen from '../15/15';
import Sixteen from '../16/16';
import Seventeen from '../17/17';
import Eighteen from '../18/18';
import Nineteen from '../19/19';
import Save from '../save/save';
import Load from '../load/load';
import Continue from '../continue/continue';

class App extends React.Component{
  constructor(props) {
    super(props);

    window.addEventListener(`resize`, () => {
        const scale = getScale();
        this.setState({pageScale: scale});
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

    this.state = {
        pageScale: getScale(),
    };
}

render(){
  return (
    <div className='App' style={{transform: 'scale(' + this.state.pageScale + ')'}}>
    <Routes>
      <Route path="/"exact element={<MainScreen/>}/>
      <Route path="/start" exact element={<SecondScreen/>}/>
      <Route path='/save' exact element={<Save/>}/>
      <Route path='/load' exact element={<Load/>}/>
      <Route path='/continue' exact element={<Continue/>}/>
      <Route path="/choosecharacter" exact element={<ChooseCharacter/>}/>
      <Route path='/choosecharacter1' exact element={<ChooseCharacter1/>}/>
      <Route path='/choosecharacter2' exact element={<ChooseCharacter2/>}/>
      <Route path='/finisheduniversity' exact element={<FinishedUniversity/>}/>
      <Route path='/1' exact element={<First/>}/>
      <Route path='/2' exact element={<Second/>}/>
      <Route path='/3' exact element={<Third/>}/>
      <Route path='/3e' exact element={<ThirdE/>}/>
      <Route path='/4' exact element={<Four/>}/>
      <Route path='/error' exact element={<Error/>}/>
      <Route path='/5' exact element={<Five/>}/>
      <Route path='/6' exact element={<Six/>}/>
      <Route path='/7' exact element={<Seven/>}/>
      <Route path='/8' exact element={<Eight/>}/>
      <Route path='/9' exact element={<Nine/>} />
      <Route path='/10' exact element={<Ten/>}/>
      <Route path='/11' exact element={<Eleven/>}/>
      <Route path='/12' exact element={<Twelve/>}/>
      <Route path='/13' exact element={<Thirteen/>}/>
      <Route path='/14' exact element={<Fourteen/>}/>
      <Route path='/15' exact element={<Fifthteen/>}/>
      <Route path='/16' exact element={<Sixteen/>}/>
      <Route path='/17' exact element={<Seventeen/>}/>
      <Route path='/18' exact element={<Eighteen/>}/>
      <Route path='/19' exact element={<Nineteen/>}/>
    </Routes>
    </div>
  );
}
}

export default App;

