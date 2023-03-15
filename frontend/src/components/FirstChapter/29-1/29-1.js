/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import p29 from "../../../images/p29.webp";
import p29г from "../../../images/p29г.webp";
import p29а from "../../../images/p29а.webp";
import p29б from "../../../images/p29б.webp";
import p29д from "../../../images/p29д.webp";
import p29в from "../../../images/p29в.webp";
import Criminal from "../../ui/criminal-case/criminal-case";
import Error from "../../ui/error/error";
import { useNavigate } from "react-router-dom";

const step = JSON.parse(localStorage.getItem("step"));
if (step !== 14) {
  localStorage.setItem("step", 14);
}

function Twentynine1() {
  const navigate = useNavigate();
  const [showButtonState, setShowButtonState] = useState(0);
  const nextPage = () => {
    navigate("/29-1CheckHallway");
  };
  return (
    <div>
      <Criminal />
      <img width="640px" height="542px" src={p29} alt="p29" />
      <div className="Buttons">
        <button
          data-to-page="p29г"
          onClick={(e) => {
            e.currentTarget.classList.add("hover_active");
            setShowButtonState(showButtonState + 1);
          }}
          className="hover"
          style={{
            backgroundColor: "transparent",
            position: "absolute",
            top: 110,
            left: "calc(50% - 250px)",
            width: 100,
            height: 100,
            color: "white",
          }}
        ></button>
        <button
          data-to-page="p29а"
          onClick={(e) => {
            e.currentTarget.classList.add("hover_active");
            setShowButtonState(showButtonState + 1);
          }}
          className="hover"
          style={{
            backgroundColor: "transparent",
            position: "absolute",
            top: 450,
            left: "calc(50% - 50px)",
            width: 100,
            height: 80,
            color: "white",
          }}
        ></button>
        <button
          data-to-page="p29д"
          onClick={(e) => {
            e.currentTarget.classList.add("hover_active");
            setShowButtonState(showButtonState + 1);
          }}
          className="hover"
          style={{
            backgroundColor: "transparent",
            position: "absolute",
            top: 400,
            left: "calc(50% - 285px)",
            width: 100,
            height: 100,
            color: "white",
          }}
        ></button>
        <button
          data-to-page="p29в"
          onClick={(e) => {
            e.currentTarget.classList.add("hover_active");
            setShowButtonState(showButtonState + 1);
          }}
          className="hover"
          style={{
            backgroundColor: "transparent",
            position: "absolute",
            top: 170,
            left: "calc(50% - -60px)",
            width: 50,
            height: 80,
            color: "white",
          }}
        ></button>
        <button
          data-to-page="p29б"
          onClick={(e) => {
            e.currentTarget.classList.add("hover_active");
            setShowButtonState(showButtonState + 1);
          }}
          className="hover"
          style={{
            backgroundColor: "transparent",
            position: "absolute",
            top: 380,
            left: "calc(50% - -50px)",
            width: 80,
            height: 80,
            color: "white",
          }}
        ></button>
        {showButtonState >= 5 ? (
          <button onClick={nextPage}>Дальше</button>
        ) : null}
      </div>
    </div>
  );
}

export default Twentynine1;
