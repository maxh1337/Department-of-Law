import React from "react";
import { useNavigate } from "react-router-dom";
import Criminal from "../ui/criminal-case/criminal-case";
import p28 from "../../images/p28.webp";

const TwentyEight = () => {
  const navigate = useNavigate()
  const nextPage = () => {
    navigate("/29-1");
  };
  return (
    <div>
      <Criminal />
      <img width="640px" height="542px" src={p28} alt="p28" />
      <div className="Buttons">
        <button onClick={nextPage}>Дальше</button>
      </div>
    </div>
  );
};

export default TwentyEight;
