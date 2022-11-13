import React from "react";
import p32б from "../../images/p32б.webp";
import { useNavigate } from "react-router-dom";
import Criminal from "../ui/criminal-case/criminal-case"

const ThirtytwoB = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Criminal/>
      <img width="640px" height="542px" src={p32б} alt="p32б" />
      <div className="Buttons">
        <button onClick={() => navigate("/33")}>Дальше</button>
      </div>
    </div>
  );
};

export default ThirtytwoB;
