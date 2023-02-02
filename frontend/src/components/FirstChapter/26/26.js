import React from "react";
import { useNavigate } from "react-router-dom";
import p26 from "../../../images/p26.webp";
import CriminalCase from "../../ui/criminal-case/criminal-case";

const Twentysix = () => {
  const navigate = useNavigate();
  return (
    <div>
      <CriminalCase />
      <img width="640px" height="542px" src={p26} alt="p26" />
      <div className="Buttons">
        <button
          onClick={() => {
            navigate("/26a");
          }}
        >
          Дальше
        </button>
      </div>
    </div>
  );
};
export default Twentysix;
