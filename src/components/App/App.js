import '../../index.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import MainScreen from '../MainScreen/MainScreen';
import SecondScreen from '../SecondScreen/SecondScreen';
import ChooseCharacter from '../ChooseCharacter/ChooseCharacter';
import ChooseCharacter1 from '../ChooseCharacter1/ChooseCharacter1';
import ChooseCharacter2 from '../ChooseCharacter2/ChooseCharacter2';
import FinishedUniversity from '../FinishedUniversity/FinishedUniversity';
import Save from '../save/save';
import Load from '../load/load';
import Continue from '../continue/continue';
import Six from '../6/6';
import Seven from '../7/7';
import Eight from '../8/8';
import Nine from '../9/9';
import Ten from '../10/10';
import Eleven from '../11/11';
import Twelve from '../12/12';
import Fourteen from '../14/14';
import FourteenJ from '../14ж/14ж';
import Fifthteen from '../15/15';
import Nineteen from '../19/19';
import Twenty from '../20/20';
import Twentyone from '../21/21';
import Twentytwo from '../22/22';
import TwentytwoA from '../22a/22a';
import Twentythree from '../23/23';
import Twentyfour from '../24/24';
import Twentyfive from '../25/25';
import Twentysix from '../26/26';
import TwentysixA from '../26а/26а';
import Twentyseven from '../27/27';
import TwentySevenB from '../27б/27б';
import TwentyEight from '../28/28';
import Twentynine1 from '../29-1/29-1';
import Twentynine2 from '../29-2/29-2';
import Thirty from '../30/30';
import Thirtyone from '../31/31';
import ThirtyA from '../30a/30a';
import Thirtytwo from '../32б/32б';
import ThirtytwoB from '../32б/32б';
import Thirtythree from '../33/33';
import Thirtyfour from '../34/34';
import Thirtyfive from '../35/35';
import Thirtysix from '../36/36';
import Thirtyseven from '../37/37';
import Thirtyeight from '../38/38';
import Thirtynine from '../39/39';
import Forty from '../40/40';
import Fortyone from '../41/41';
import Fortyfour from '../44/44';
import Fortysix from '../46/46';
import Fortyseven from '../47/47';


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
      <Route path="/"exact element={<MainScreen/>}/>                             {/*1*/}
      <Route path="/start" exact element={<SecondScreen/>}/>
      <Route path='/save' exact element={<Save/>}/>
      <Route path='/load' exact element={<Load/>}/>
      <Route path='/continue' exact element={<Continue/>}/>
      <Route path="/choosecharacter" exact element={<ChooseCharacter/>}/>        {/*2*/}
      <Route path='/choosecharacter1' exact element={<ChooseCharacter1/>}/>      {/*3*/}
      <Route path='/choosecharacter2' exact element={<ChooseCharacter2/>}/>      {/*4*/}
      <Route path='/finisheduniversity' exact element={<FinishedUniversity/>}/>  {/*5*/}
      <Route path='/6' exact element={<Six/>}/>
      <Route path='/7' exact element={<Seven/>}/>
      <Route path='/8' exact element={<Eight/>}/>
      <Route path='/9' exact element={<Nine/>}/>
      <Route path='/10' exact element={<Ten/>}/>
      <Route path='/11' exact element={<Eleven/>}/>
      <Route path='/12' exact element={<Twelve/>}/>
      <Route path='/14' exact element={<Fourteen/>}/>
      <Route path='/14j' exact element={<FourteenJ/>}/>
      <Route path='/15' exact element={<Fifthteen/>}/>
      <Route path='/19' exact element={<Nineteen/>}/>
      <Route path='/20' exact element={<Twenty/>}/>
      <Route path='/21' exact element={<Twentyone/>}/>
      <Route path='/22' exact element={<Twentytwo/>}/>
      <Route path='/22a' exact element={<TwentytwoA/>}/>
      <Route path='/23' exact element={<Twentythree/>}/>
      <Route path='/24' exact element={<Twentyfour/>}/>
      <Route path='/25' exact element={<Twentyfive/>}/>
      <Route path='/26' exact element={<Twentysix/>}/>
      <Route path='/26a' exact element={<TwentysixA/>}/>
      <Route path='/27' exact element={<Twentyseven/>}/>
      <Route path='/27b' exact element={<TwentySevenB/>}/>
      <Route path='/28' exact element={<TwentyEight/>}/>
      <Route path='/29-1' exact element={<Twentynine1/>}/> 
      <Route path='/29-2' exact element={<Twentynine2/>}/>
      <Route path='/30' exact element={<Thirty/>}/>
      <Route path='/30a' exact element={<ThirtyA/>}/>
      <Route path='/31' exact element={<Thirtyone/>}/>
      <Route path='/32' exact element={<Thirtytwo/>}/>
      <Route path='/32b' exact element={<ThirtytwoB/>}/>
      <Route path='/33' exact element={<Thirtythree/>}/>
      <Route path='/34' exact element={<Thirtyfour/>}/>
      <Route path='/35' exact element={<Thirtyfive/>}/>
      <Route path='/36' exact element={<Thirtysix/>}/>
      <Route path='/37' exact element={<Thirtyseven/>}/>
      <Route path='/38' exact element={<Thirtyeight/>}/>
      <Route path='/39' exact element={<Thirtynine/>}/>
      <Route path='/40' exact element={<Forty/>}/>
      <Route path='/41' exact element={<Fortyone/>}/>
      <Route path='/44' exact element={<Fortyfour/>}/>
      <Route path='/46' exact element={<Fortysix/>}/>
      <Route path='/47' exact element={<Fortyseven/>}/>
    </Routes>
    </div>
  );
}
}

export default App;

