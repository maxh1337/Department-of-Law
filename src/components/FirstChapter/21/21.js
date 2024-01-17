import React from "react";
import { useNavigate } from "react-router-dom";
import p21 from "../../../images/p21.webp";

const Twentyone = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img width="640px" height="542px" src={p21} alt="p21" />
      <div className="Buttons">
        <button
          onClick={() => {
            navigate("/22");
          }}
        >
          Дальше
        </button>
      </div>
    </div>
  );
};
export default Twentyone;
