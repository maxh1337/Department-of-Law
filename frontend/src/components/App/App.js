import '../../index.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import MainScreen from '../common/MainScreen/MainScreen';
import SecondScreen from '../common/SecondScreen/SecondScreen';
import ChooseCharacter from '../common/ChooseCharacter/ChooseCharacter';
import ChooseCharacter1 from '../common/ChooseCharacter1/ChooseCharacter1';
import ChooseCharacter2 from '../common/ChooseCharacter2/ChooseCharacter2';
import FinishedUniversity
    from '../common/FinishedUniversity/FinishedUniversity';
import Save from '../common/save/save';
import Load from '../common/load/load';
import Continue from '../common/continue/continue';
import {routes} from "../dataRoutes";

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

    this.routes = routes
}


render(){
  return (
    <div className='App' style={{transform: 'scale(' + this.state.pageScale + ')'}}>
    <Routes>
      {/*Общие Routes*/}
      <Route path="/" exact element={<MainScreen/>}/>                             {/*1*/}
      <Route path="/start" exact element={<SecondScreen/>}/>
      <Route path='/save' exact element={<Save/>}/>
      <Route path='/load' exact element={<Load/>}/>
      <Route path='/continue' exact element={<Continue/>}/>
      <Route path="/choosecharacter" exact element={<ChooseCharacter/>}/>        {/*2*/}
      <Route path='/choosecharacter1' exact element={<ChooseCharacter1/>}/>      {/*3*/}
      <Route path='/choosecharacter2' exact element={<ChooseCharacter2/>}/>      {/*4*/}
      <Route path='/finisheduniversity' exact element={<FinishedUniversity/>}/>  {/*5*/}
      {/* Роуты для первой главы */}
      {this.routes.map(route => {
        return(
            <Route path={route.path}
                   exact={route.exact}
                   key={`route ${route.path}`}
                   element={<route.component/>}
            />
        )
      })}
    </Routes>
    </div>
  );
}
}

export default App;