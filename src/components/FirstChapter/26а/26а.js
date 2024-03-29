import React from "react";
import { useNavigate } from "react-router-dom";
import p26а from "../../../images/p26a.webp";
import CriminalCase from "../../ui/criminal-case/criminal-case";

const TwentysixA = () => {
  const navigate = useNavigate();
  return (
    <div>
      <CriminalCase />
      <img width="640px" height="542px" src={p26а} alt="p26а" />
      <div className="Buttons">
        <button
          onClick={() => {
            navigate("/27");
          }}
        >
          Дальше
        </button>
      </div>
    </div>
  );
};
export default TwentysixA;
