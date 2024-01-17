import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChooseCharacter2.css";
import p4 from "../../../images/p4.webp";

function ChooseCharacter2() {
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const navigate = useNavigate();
  const [isChosen1, setIsChosen1] = useState(0);
  const [isChosen2, setIsChosen2] = useState(0);

  const nextPage = () => {
    if (currentCharacter == 1) {
      navigate("/vud1");
    }
    if (currentCharacter == 2) {
      navigate("/vud2");
    }
  };

  const setChosen = (e) => {
    if (e.target.value === "1") {
      setIsChosen1(e.target.value);
      setCurrentCharacter(e.target.value);
      setIsChosen2(0);
      console.log(currentCharacter);
    }
    if (e.target.value === "2") {
      setIsChosen2(e.target.value);
      setCurrentCharacter(e.target.value);
      setIsChosen1(0);
      console.log(currentCharacter);
    }
  };

  return (
    <div>
      <button
        value="1"
        id="test1"
        className={
          isChosen1 === 0 ? "buttonToChoose4" : "buttonToChoose4 borderjs"
        }
        onClick={setChosen}
      />
      <button
        value="2"
        id="test2"
        className={
          isChosen2 === 0 ? "buttonToChoose5" : "buttonToChoose5 borderjs"
        }
        onClick={setChosen}
      />
      <img src={p4} width="640px" height="542px" alt="p4" />
      <a
        title="Следователь"
        target="_blank"
        rel="nooper noreferrer"
        href="https://drive.google.com/file/d/1E5MxtbaEAoGSmNoKfgV3KRWtc7FcoMT8/view"
      >
        {/*<img alt='Следователь' src={res2} style={{position: 'absolute', width: '30px', top: '127px', left: 'calc(50% - 42px)'}}/>*/}
      </a>
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
}

export default ChooseCharacter2;
