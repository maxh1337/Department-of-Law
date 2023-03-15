import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import p37 from "../../../images/p37.webp";
import Error from "../../ui/error/error";
import Criminal from "../../ui/criminal-case/criminal-case";

const Thirtyseven = () => {
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const CheckAndRedirect4 = () => {
    const inputValue1 = document.getElementById("19-5").value;
    if (inputValue1.toLowerCase() === "трасологической") {
      setRedirect(true);
    } else {
      setError(true);
    }
  };

  return redirect === false ? (
    error === false ? (
      <div>
        <Criminal />
        <img width="640px" height="542px" src={p37} alt="p37" />
        <div className="doc-content">
          ПОСТАНОВЛЕНИЕ:
          <br />
          о назначении
          <br />
          <input
            placeholder="Заполните пропуск"
            id="19-5"
            style={{ width: "180" }}
          />
          &nbsp;судебной экспертизы.
          <br />
          ...
          <br />
          <br />
          <button onClick={CheckAndRedirect4}>Проверить</button>
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
            href="https://docs.google.com/document/d/1QHvuQuHJwEeruxJ48JouM2n2KAvVzFCJ/edit?usp=share_link&ouid=103959558910814942921&rtpof=true&sd=true"
          >
            <button>Не понятно</button>
          </a>
        }
        button2style={{ display: "none" }}
      />
    )
  ) : (
    <Navigate to="/38" />
  );
};

export default Thirtyseven;
