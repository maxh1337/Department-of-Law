import i21 from "../../../images/PART 2/i21.webp";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const I21 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i22");
  };
  return (
    <div>
      <CriminalCase />
      <img src={i21} width="640px" height="542px" alt="i21" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default I21;
