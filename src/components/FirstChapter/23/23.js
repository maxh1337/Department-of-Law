import React from "react";
import { useNavigate } from "react-router-dom";
import p23 from "../../../images/p23.webp";

const Twentythree = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img width="640px" height="542px" src={p23} alt="p23" />
      <div className="Buttons">
        <button
          onClick={() => {
            navigate("/24");
          }}
        >
          Дальше
        </button>
      </div>
    </div>
  );
};
export default Twentythree;
