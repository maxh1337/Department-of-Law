import React from "react";
import { useNavigate } from "react-router-dom";
import p44 from "../../../images/p44.webp";
import Criminal from "../../ui/criminal-case/criminal-case";

const Fortyfour = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Criminal />
      <img width="640px" height="542px" src={p44} alt="p44" />
      <div className="Buttons">
        <button
          onClick={() => {
            navigate("/45");
          }}
        >
          Продолжить
        </button>
      </div>
    </div>
  );
};

export default Fortyfour;
