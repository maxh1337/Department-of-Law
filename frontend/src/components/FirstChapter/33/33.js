import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import p33 from "../../../images/p33.webp";
import Error from "../../ui/error/error";
import Criminal from "../../ui/criminal-case/criminal-case";

const Thirtythree = () => {
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const CheckAndRedirect = () => {
    const inputValue = document.getElementById("19-1").value; // Было 19-i1
    if (
      inputValue.toLowerCase() === "дактилоскопическую" ||
      inputValue.toLowerCase() === "дактилоскопическая" ||
      inputValue.toLowerCase() === "дактилоскопической"
    ) {
      setRedirect(true);
    } else {
      setError(true);
    }
  };

  return redirect === false ? (
    error === false ? (
      <div>
        <Criminal />
        <img width="640px" height="542px" src={p33} alt="p33" />
        <div className="doc-content">
          ПОСТАНОВЛЕНИЕ:
          <br />
          о назначении
          <br />
          <input
            placeholder="Заполните пропуск"
            id="19-1"
            style={{ width: "180" }}
          />
          &nbsp;судебной экспертизы.
          <br />
          ...
          <br />
          <br />
          <button onClick={CheckAndRedirect}>Проверить</button>
        </div>
      </div>
    ) : (
      <Error
        text="Подумай!"
        onClick1={() => {
          setError(false);
        }}
        button1="Понятно"
        newButton={
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1DjKMacNaiDvHWz_sAArIHUQLkqL0iUvq/edit?usp=share_link&ouid=103959558910814942921&rtpof=true&sd=true"
          >
            <button>Не понятно</button>
          </a>
        }
        button2style={{ display: "none" }}
      />
    )
  ) : (
    <Navigate to="/34" />
  );
};

export default Thirtythree;
