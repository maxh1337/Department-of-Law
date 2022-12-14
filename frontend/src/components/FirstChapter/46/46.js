import React from "react";
import { useNavigate } from "react-router-dom";
import p46 from "../../../images/p46.webp";

const Fortysix = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img width="640px" height="542px" src={p46} alt="p46" />
      <div className="Buttons">
        <button onClick={() => navigate("/")}>Продолжить</button>
      </div>
    </div>
  );
};

export default Fortysix;
