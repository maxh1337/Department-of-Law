import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import p34 from "../../../images/p34.webp";
import Error from "../../ui/error/error";
import Criminal from "../../ui/criminal-case/criminal-case";

const Thirtyeight = () => {
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const CheckAndRedirect5 = () => {
    const inputValue1 = document.getElementById("19-6").value;
    const inputValue11 = document.getElementById("19-61").value;
    if (
      inputValue1.toLowerCase() === "замок" &&
      inputValue11.toLowerCase() === "замок"
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
        <img width="640px" height="542px" src={p34} alt="p37" />
        <div className="doc-content">
          В исправном ли состоянии находится
          <br />
          <input
            placeholder="Заполните пропуск"
            style={{ width: 180 }}
            id="19-6"
          />
          &nbsp; , изъятый с места происшествия?
          <br />
          <br />
          Отперт ли данный
          <input
            placeholder="Заполните пропуск"
            style={{ width: 180 }}
            id="19-61"
          />
          &nbsp; ключом или посторонним предметом?
          <button onClick={CheckAndRedirect5}>Проверить</button>
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
            href="https://docs.google.com/document/d/1jlRKgAzGfDIRdDIgAAq3HDnLNsKM5IcT/edit?usp=share_link&ouid=103959558910814942921&rtpof=true&sd=true"
          >
            <button>Не понятно</button>
          </a>
        }
        button2style={{ display: "none" }}
      />
    )
  ) : (
    <Navigate to="/39" />
  );
};

export default Thirtyeight;
