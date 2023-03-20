import React from "react";
import { useNavigate } from "react-router-dom";
import p39 from "../../../images/p39.png";
import Criminal from "../../ui/criminal-case/criminal-case";
import {
  ZacluchenieDactilo,
  ZacluchenieTrasologicheskoy,
} from "../../ui/allFiles";

const Thirtynine = () => {
  const documents = JSON.parse(localStorage.getItem("documents"));

  const navigate = useNavigate();
  return (
    <div>
      <Criminal />
      <img width="640px" height="542px" src={p39} alt="p39" />
      <div className="Buttons">
        <button
          onClick={() => {
            navigate("/40");
            const newDocuments = [
              ...documents,
              ZacluchenieDactilo,
              ZacluchenieTrasologicheskoy,
            ];
            localStorage.setItem("documents", JSON.stringify(newDocuments));
          }}
        >
          Продолжить
        </button>
      </div>
    </div>
  );
};

export default Thirtynine;
