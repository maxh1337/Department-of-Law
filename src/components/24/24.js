import React from "react";
import { useNavigate } from "react-router-dom";
import p24 from "../../images/p24.webp";

const Twentyfour = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img width="640px" height="542px" src={p24} alt="p24" />
      <div className="Buttons">
        <button
          onClick={() => {
            navigate("/25")
          }}
        >
          Дальше
        </button>
      </div>
    </div>
  );
};
export default Twentyfour;
