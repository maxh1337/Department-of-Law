/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import p20 from "../../../images/p20.webp";
import p20а from "../../../images/p20а.webp";
import p20б from "../../../images/p20б.webp";
import { objasnenieDocheri, objasnenieMuzha } from "../../ui/allFiles";
import CriminalCase from "../../ui/criminal-case/criminal-case";

const Twenty = () => {
  const documents = JSON.parse(localStorage.getItem("documents"));
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const [showButtonState, setShowButtonState] = useState(0);

  return currentPage === 0 ? (
    <div>
      <CriminalCase />
      <img width="640px" height="542px" src={p20} alt="p20" />
      {showButtonState >= 2 ? (
        <div className="Buttons">
          <button
            onClick={() => {
              navigate("/21");
            }}
          >
            Дальше
          </button>
        </div>
      ) : null}
      <a
        data-to-page="p20a"
        onClick={() => {
          setCurrentPage(1);
          setShowButtonState(showButtonState + 1);
        }}
        className="buttonToChoose1"
        style={{
          position: "absolute",
          top: 30,
          left: "calc(50% - 270px)",
          width: 200,
          height: 500,
          color: "white",
        }}
      ></a>
      <a
        data-to-page="p20б"
        onClick={() => {
          setCurrentPage(2);
          setShowButtonState(showButtonState + 1);
        }}
        className="buttonToChoose1"
        style={{
          position: "absolute",
          top: 190,
          left: "calc(50% - 70px)",
          width: 100,
          height: 340,
        }}
      ></a>
    </div>
  ) : currentPage === 1 ? (
    <div>
      <img width="640px" height="542px" src={p20а} alt="p20a" />
      <div className="Buttons">
        <button
          data-to-page="p22a"
          onClick={() => {
            setCurrentPage(0);
            const newDocuments = [...documents, objasnenieMuzha];
            localStorage.setItem("documents", JSON.stringify(newDocuments));
          }}
        >
          Дальше
        </button>
      </div>
    </div>
  ) : (
    <div>
      <img width="640px" height="542px" src={p20б} alt="p20б" />
      <div className="Buttons">
        <button
          data-to-page="p22a"
          onClick={() => {
            setCurrentPage(0);
            const newDocuments = [...documents, objasnenieDocheri];
            localStorage.setItem("documents", JSON.stringify(newDocuments));
          }}
        >
          Дальше
        </button>
      </div>
    </div>
  );
};
export default Twenty;
