import p2 from "../../../images/p2.webp";
import "./ChooseCharacter.css";
import res1 from "../../../images/buttons/Resurs_1_4x.webp";
import res2 from "../../../images/buttons/Resurs_2_4x.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ChooseCharacter() {
  const navigate = useNavigate();
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [isChosen1, setIsChosen1] = useState(0);
  const [isChosen2, setIsChosen2] = useState(0);
  const [isChosen3, setIsChosen3] = useState(0);

  const setChosen = (e) => {
    if (e.target.value === "1") {
      setIsChosen1(e.target.value);
      setCurrentCharacter(e.target.value);
      setIsChosen2(0);
      setIsChosen3(0);
    }
    if (e.target.value === "2") {
      setIsChosen2(e.target.value);
      setCurrentCharacter(e.target.value);
      setIsChosen1(0);
      setIsChosen3(0);
    }
    if (e.target.value === "3") {
      setIsChosen3(e.target.value);
      setCurrentCharacter(e.target.value);
      setIsChosen1(0);
      setIsChosen2(0);
    }
  };

  const nextPage = () => {
    console.log(currentCharacter === "2");
    if (currentCharacter === "1") {
      localStorage.setItem("currentCharacter", 1);
      navigate("/choosecharacter1");
    } else if (currentCharacter === "2") {
      localStorage.setItem("currentCharacter", 2);
      navigate("/choosecharacterdoznavatel");
    }
  };

  return (
    <div>
      <button
        value="1"
        id="test1"
        className={
          isChosen1 === 0 ? "buttonToChoose1" : "buttonToChoose1 borderjs"
        }
        onClick={setChosen}
      />
      <button
        value="2"
        id="test2"
        className={
          isChosen2 === 0 ? "buttonToChoose2" : "buttonToChoose2 borderjs"
        }
        onClick={setChosen}
      />
      <button
        value="3"
        id="test3"
        className={
          isChosen3 === 0 ? "buttonToChoose3" : "buttonToChoose3 borderjs"
        }
        onClick={setChosen}
      />
      <img width="640" height="542" src={p2} alt="p2"></img>
      <a
        title="Следователь"
        target="_blank"
        rel="nooper noreferrer"
        href="https://drive.google.com/file/d/1Qqku69nm-I09zpUbsrNlUvIVsbru2P1m/view"
      >
        <img
          alt="Следователь"
          src={res2}
          style={{
            position: "absolute",
            width: "30px",
            top: "157px",
            left: "calc(50% - 132px)",
          }}
        />
      </a>
      <a
        title="Формы предварительного расследования"
        target="_blank"
        rel="nooper noreferrer"
        href="https://drive.google.com/file/d/1M1JpFqho86C8ZXcCcwUprGmtN0ILFSef/view"
      >
        <img className="criminal-case" alt="Следователь" src={res1} />
      </a>
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage} id="btn1">
          Дальше
        </button>
      </div>
    </div>
  );
}

export default ChooseCharacter;
