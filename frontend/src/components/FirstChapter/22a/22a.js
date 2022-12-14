import React from "react";
import { useNavigate } from "react-router-dom";
import p22a from "../../../images/p22a.webp";

const TwentytwoA = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img width="640px" height="542px" src={p22a} alt="p22a" />
      <div className="Buttons">
        <button
          onClick={() => {
            navigate("/23");
          }}
        >
          Дальше
        </button>
      </div>
    </div>
  );
};
export default TwentytwoA;
