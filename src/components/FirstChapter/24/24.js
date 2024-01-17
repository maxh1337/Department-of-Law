import React from "react";
import { useNavigate } from "react-router-dom";
import p24 from "../../../images/p24.webp";
import { ActSobaki, resultObhoda } from "../../ui/allFiles";
import CriminalCase from "../../ui/criminal-case/criminal-case";

const Twentyfour = () => {
  const documents = JSON.parse(localStorage.getItem("documents"));

  const navigate = useNavigate();
  return (
    <div>
      <CriminalCase />
      <img width="640px" height="542px" src={p24} alt="p24" />
      <div className="Buttons">
        <button
          onClick={() => {
            const newDocuments = [...documents, resultObhoda];
            localStorage.setItem("documents", JSON.stringify(newDocuments));
            navigate("/25");
          }}
        >
          Дальше
        </button>
      </div>
    </div>
  );
};
export default Twentyfour;
