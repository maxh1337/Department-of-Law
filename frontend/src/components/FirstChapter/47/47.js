import React from "react";
import { useNavigate } from "react-router-dom";
import p47 from "../../../images/p47.webp"

const Fortyseven = () => {
  const navigate = useNavigate();
  return (
    <div>
    <img width="640px" height="542px" src={p47} alt="p47"/>
    <div className="Buttons">
        <button onClick={() => navigate("/start")}>Продолжить</button>   
    </div>
</div>
  );
};


export default Fortyseven;