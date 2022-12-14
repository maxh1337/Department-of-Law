import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import p35 from "../../../images/p35.webp";
import Error from "../../ui/error/error";
import Criminal from "../../ui/criminal-case/criminal-case"

const Thirtyfive = () => {
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const CheckAndRedirect2 = () => {
    const inputValue1 = document.getElementById("19-3").value
    if (
        inputValue1.toLowerCase() === 'трасологической' 
    ) {
        setRedirect(true)
    } else {
        setError(true)
    }
}

  return redirect === false ? (
    error === false ? (
      <div>
        <Criminal/>
        <img width="640px" height="542px" src={p35} alt="p35" />
        <div className="doc-content">
          ПОСТАНОВЛЕНИЕ:
          <br />
          о назначении
          <br />
          <input
            placeholder="Заполните пропуск"
            style={{ width: 180 }}
            id="19-3"
          />
          &nbsp; экспертизы.
          <br />
          ...
          <br />
          <br />
          <button onClick={CheckAndRedirect2}>Проверить</button>
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
    <Navigate to="/36" />
  );
};

export default Thirtyfive;
