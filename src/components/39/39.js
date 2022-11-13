import React from "react";
import { useNavigate } from "react-router-dom";
import p39 from "../../images/p39.jpg";
import Criminal from "../ui/criminal-case/criminal-case";

const Thirtynine = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Criminal />
      <img width="640px" height="542px" src={p39} alt="p39" />
      <div className="Buttons">
        <button
          onClick={() => {
            navigate("/40");
          }}
        >
          Продолжить
        </button>
      </div>
    </div>
  );
};

export default Thirtynine;
