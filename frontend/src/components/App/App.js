// import "../../index.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MainScreen from "../common/MainScreen/MainScreen";
import SecondScreen from "../common/SecondScreen/SecondScreen";
import ChooseCharacter from "../common/ChooseCharacter/ChooseCharacter";
import ChooseCharacter1 from "../common/ChooseCharacter1/ChooseCharacter1";
import ChooseCharacter2 from "../common/ChooseCharacter2/ChooseCharacter2";
import FinishedUniversity from "../common/FinishedUniversity/FinishedUniversity";
import { routes1 } from "../dataRoutesFirstChapter";
import { routes2 } from "../dataRoutesSecondChapter";
import { routes3 } from "../dataRoutesThirdChapter";
import { routes2Help } from "../dataRoutesSecondChapterHelp";
import About from "../common/About/About";
import Vud1 from "../common/Vud1/Vud1";
import Vud2 from "../common/Vud2/Vud2";
import ChooseCharacterDoznavatel from "../common/ChooseCharacterDoznavatel/ChooseCharacterDoznavatel";

class App extends React.Component {
  constructor(props) {
    super(props);
    window.addEventListener(
      `resize`,
      () => {
        const scale = getScale();
        this.setState({ pageScale: scale });
      },
      false
    );

    const getScale = () => {
      const clientWidth = document.documentElement.clientWidth;
      const clientHeight = document.documentElement.clientHeight;
      if (clientWidth > clientHeight) {
        return clientHeight / 610;
      } else {
        return clientWidth / 640;
      }
    };

    this.state = {
      pageScale: getScale(),
    };

    this.routes1 = routes1;
    this.routes2 = routes2;
    this.routes3 = routes3;
    this.routes2Help = routes2Help;
  }

  render() {
    return (
      <div
        className="App"
        style={{ transform: "scale(" + this.state.pageScale + ")" }}
      >
        <Routes>
          {/*Общие Routes*/}
          <Route path="/" exact element={<MainScreen />} /> {/*i1*/}
          <Route path="/start" exact element={<SecondScreen />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/vud1" exact element={<Vud1 />} />
          <Route path="/vud2" exact element={<Vud2 />} />
          <Route
            path="/choosecharacterdoznavatel"
            exact
            element={<ChooseCharacterDoznavatel />}
          />
          <Route path="/choosecharacter" exact element={<ChooseCharacter />} />{" "}
          {/*2*/}
          <Route
            path="/choosecharacter1"
            exact
            element={<ChooseCharacter1 />}
          />{" "}
          {/*3*/}
          <Route
            path="/choosecharacter2"
            exact
            element={<ChooseCharacter2 />}
          />{" "}
          {/*4*/}
          <Route
            path="/finisheduniversity"
            exact
            element={<FinishedUniversity />}
          />{" "}
          {/*5*/}
          {/* Роуты для первой главы */}
          {this.routes1.map((route) => {
            return (
              <Route
                path={route.path}
                exact={route.exact}
                key={`route ${route.path}`}
                element={<route.component />}
              />
            );
          })}
          {this.routes2.map((route) => {
            return (
              <Route
                path={route.path}
                exact={route.exact}
                key={`route ${route.path}`}
                element={<route.component />}
              />
            );
          })}
          {this.routes2Help.map((route) => {
            return (
              <Route
                path={route.path}
                exact={route.exact}
                key={`route ${route.path}`}
                element={<route.component />}
              />
            );
          })}
          {this.routes3.map((route) => {
            return (
              <Route
                path={route.path}
                exact={route.exact}
                key={`route ${route.path}`}
                element={<route.component />}
              />
            );
          })}
        </Routes>
      </div>
    );
  }
}

export default App;
