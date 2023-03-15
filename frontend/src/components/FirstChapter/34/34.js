import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import p34 from "../../../images/p34.webp";
import Error from "../../ui/error/error";
import Criminal from "../../ui/criminal-case/criminal-case";

const Thirtyfour = () => {
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const CheckAndRedirect1 = () => {
    const inputValue1 = document.getElementById("19-2").value;
    const inputValue2 = document.getElementById("19-3").value;
    if (
      inputValue1.toLowerCase() === "папиллярных узоров" &&
      inputValue2.toLowerCase() === "папиллярных узоров"
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
        <img width="640px" height="542px" src={p34} alt="p34" />
        <div className="doc-content">
          П1. Являются ли изъятые с места происшествия следы
          <br />
          <input
            placeholder="Заполните пропуск"
            id="19-2"
            style={{ width: 180 }}
          />
          &nbsp;пальцев рук пригодными для идентификации?
          <br />
          <br />
          Принадлежат ли представленные следы
          <input
            placeholder="Заполните пропуск"
            id="19-3"
            style={{ width: 180 }}
          />
          &nbsp; пальцев рук гражданам Синичкиной С. Г., Синичкина А. А.,
          Синичкиной И. А. или постороннему лицу?
          <br />
          <button onClick={CheckAndRedirect1}>Проверить</button>
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
            href="https://drive.google.com/file/d/1KDVs9OQs31MTTIFIP-zIVe9hDEwONRhE/view"
          >
            <button>Не понятно</button>
          </a>
        }
        button2style={{ display: "none" }}
      />
    )
  ) : (
    <Navigate to="/37" />
  );
};

export default Thirtyfour;
