/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Criminal from "../../ui/criminal-case/criminal-case";
import Error from "../../ui/error/error";
import p29кк from "../../../images/p29кк.jpg";
import p29к from "../../../images/p29к.webp";
import p29к2 from "../../../images/p29к2.webp";
import p29к3 from "../../../images/p29к3.webp";
import p29к4 from "../../../images/p29к4.webp";
import p29к5 from "../../../images/p29к5.webp";
import p29к6 from "../../../images/p29к6.webp";
import { useNavigate } from "react-router-dom";

const step = JSON.parse(localStorage.getItem("step"));
if (step !== 15) {
  localStorage.setItem("step", 15);
}

function Twentynine2() {
  const [error, setError] = useState(0);
  const [evidence, setEvidence] = useState(0);
  const [showButtonState, setShowButtonState] = useState(0);
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/30");
  };
  return (
    <div>
      <Criminal />
      <img width="640px" height="542px" src={p29кк} alt="p29к" />
      <div className="Buttons">
        <a //След ноги на кресле
          data-to-page="p29к2"
          onClick={(e) => {
            e.currentTarget.classList.add("hover_active");
            setShowButtonState(showButtonState + 1);
          }}
          className="hover"
          style={{
            position: "absolute",
            top: 300,
            left: "calc(50% - 20px)",
            width: 70,
            height: 70,
            color: "white",
          }}
        >
          {""}
        </a>
        <a //Отпечаток пальцев на телевизоре
          data-to-page="p29к3"
          onClick={(e) => {
            e.currentTarget.classList.add("hover_active");
            setShowButtonState(showButtonState + 1);
          }}
          className="hover"
          style={{
            position: "absolute",
            top: 300,
            left: "calc(50% - 230px)",
            width: 70,
            height: 70,
            color: "white",
          }}
        >
          {""}
        </a>
        <a //Отпечаток пальцев шкафу
          data-to-page="p29к3-2"
          onClick={(e) => {
            e.currentTarget.classList.add("hover_active");
            setShowButtonState(showButtonState + 1);
          }}
          className="hover"
          style={{
            position: "absolute",
            top: 120,
            left: "calc(50% - 310px)",
            width: 60,
            height: 60,
            color: "white",
          }}
        >
          {""}
        </a>
        <a //Отпечаток пальцев шкафу
          data-to-page="p29к3-3"
          onClick={(e) => {
            e.currentTarget.classList.add("hover_active");
            setShowButtonState(showButtonState + 1);
          }}
          className="hover"
          style={{
            position: "absolute",
            top: 206,
            left: "calc(50% - 56px)",
            width: 30,
            height: 30,
            color: "white",
          }}
        >
          {""}
        </a>
        <a //Яблоко
          data-to-page="p29к4"
          onClick={(e) => {
            e.currentTarget.classList.add("hover_active");
            setShowButtonState(showButtonState + 1);
          }}
          className="hover"
          style={{
            position: "absolute",
            top: 195,
            left: "calc(50% - 30px)",
            width: 30,
            height: 30,
            color: "white",
          }}
        >
          {""}
        </a>
        <a //Пуговица
          data-to-page="p29к5"
          onClick={(e) => {
            e.currentTarget.classList.add("hover_active");
            setShowButtonState(showButtonState + 1);
          }}
          className="hover"
          style={{
            position: "absolute",
            top: 390,
            left: "calc(50% - 40px)",
            width: 40,
            height: 40,
            color: "white",
          }}
        >
          {""}
        </a>
        {showButtonState >= 6 ? (
          <button onClick={nextPage}>Дальше</button>
        ) : null}
      </div>
    </div>
  );
}

export default Twentynine2;
