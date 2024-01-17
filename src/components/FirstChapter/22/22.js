import React from "react";
import { useNavigate } from "react-router-dom";
import p22 from "../../../images/p22.webp";
import { ActSobaki, objasnenieDocheri } from "../../ui/allFiles";

const Twentytwo = () => {
  const documents = JSON.parse(localStorage.getItem("documents"));

  const navigate = useNavigate();
  return (
    <div>
      <img width="640px" height="542px" src={p22} alt="p22" />
      <div className="Buttons">
        <button
          onClick={() => {
            const newDocuments = [...documents, ActSobaki];
            localStorage.setItem("documents", JSON.stringify(newDocuments));
            navigate("/22a");
          }}
        >
          Дальше
        </button>
      </div>
    </div>
  );
};
export default Twentytwo;
