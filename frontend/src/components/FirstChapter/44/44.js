import React from "react";
import { useNavigate } from "react-router-dom";
import p44 from "../../../images/p44.webp"

const Fortyfour = () => {
    const navigate = useNavigate()
  return (
    <div>
      <img width="640px" height="542px" src={p44} alt="p44" />
      <div className="Buttons">
        <button
          onClick={() => {
            navigate("/46");
          }}
        >
          Продолжить
        </button>
      </div>
    </div>
  );
};

export default Fortyfour;
