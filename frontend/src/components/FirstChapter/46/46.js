import React from "react";
import { useNavigate } from "react-router-dom";
import nezakonno from "../../../images/p47.webp";
import Criminal from "../../ui/criminal-case/criminal-case";
import zakonno from "../../../images/Законно.png";

const Fortysix = () => {
  const navigate = useNavigate();
  const choose = JSON.parse(localStorage.getItem("choose"));

  return (
    <div>
      <Criminal />
      {choose === "reject" ? (
        <img width="640px" height="542px" src={nezakonno} alt="p46" />
      ) : (
        <img width="640px" height="542px" src={zakonno} alt="p46" />
      )}
      <div className="Buttons">
        <button onClick={() => navigate("/47")}>Продолжить</button>
      </div>
    </div>
  );
};

export default Fortysix;
