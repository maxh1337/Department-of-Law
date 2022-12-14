import React from "react";
import { useNavigate } from "react-router-dom";
import p25 from "../../../images/p25.webp";

const Twentyfive = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img width="640px" height="542px" src={p25} alt="p25" />
      <div className="Buttons">
        <button
          onClick={() => {
            navigate("/26")
          }}
        >
          Дальше
        </button>
      </div>
    </div>
  );
};
export default Twentyfive;