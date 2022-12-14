import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import p34 from "../../../images/p34.webp"
import Error from "../../ui/error/error";
import Criminal from "../../ui/criminal-case/criminal-case"

const Thirtyeight = () => {
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const CheckAndRedirect5 = () => {
    const inputValue1 = document.getElementById("19-6").value
    const inputValue11 = document.getElementById("19-61").value
    const inputValue12 = document.getElementById("19-62").value
    const inputValue2 = document.getElementById("19-6-1").value
    const inputValue3 = document.getElementById("19-6-2").value
    if (
        inputValue1.toLowerCase() === 'замок' &&
        inputValue11.toLowerCase() === 'замок' &&
        inputValue12.toLowerCase() === 'замок' &&
        inputValue2.toLowerCase() === 'взлома' &&
        inputValue3.toLowerCase() === 'предметом'
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
        <img width="640px" height="542px" src={p34} alt="p37"/>
        <div className="doc-content">
        Исправен ли представленный на исследование
        <br/>
        <input placeholder="Заполните пропуск" style={{width: 180}} id="19-6"/>
        &nbsp;
        <br/>
        Если
        <input placeholder="Заполните пропуск" style={{width: 180}} id="19-61"/>
        &nbsp;
        неисправен, то какова причина его неисправности?
        <br/>
        Возможно ли отпереть (запереть)
        <input placeholder="Заполните пропуск" style={{width: 180}} id="19-62"/>
        &nbsp;
        конкретными ключами
        (ключом)?
        <br/>
        Имеются ли на механизме замка следы
        <input placeholder="Заполните пропуск" style={{width: 180}}id="19-6-1"/>
        &nbsp;
        ?
        <br/>
        Если «имеются», то каким
        <input placeholder="Заполните пропуск" style={{width: 180}}id="19-6-2"/>
        &nbsp;
        был взломан замок?
        <br/>

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
            href="https://drive.google.com/file/d/1KDVs9OQs31MTTIFIP-zIVe9hDEwONRhE/view"
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