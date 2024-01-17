import React from "react";
import { useNavigate } from "react-router-dom";
import p40 from "../../../images/p40.webp"
import Criminal from "../../ui/criminal-case/criminal-case"

const Forty = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Criminal/>
      <img width="640px" height="542px" src={p40} alt="p40" />
      <div className="Buttons">
        <button
          onClick={() => {
            navigate("/41");
          }}
        >
          Продолжить
        </button>
      </div>
    </div>
  );
};

export default Forty;
