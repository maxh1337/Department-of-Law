import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import p34 from "../../images/p34.jpg"
import Error from "../error/error";
import Criminal from "../ui/criminal-case/criminal-case"

const Thirtyfour = () => {
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const CheckAndRedirect1 = () => {
    const inputValue1 = document.getElementById("19-2").value
    const inputValue2 = document.getElementById("19-3").value
    const inputValue3 = document.getElementById("19-4").value
    const inputValue4 = document.getElementById("19-5").value
    const inputValue5 = document.getElementById("19-6").value
    if (
        inputValue1.toLowerCase() === 'папиллярных узоров' &&
        inputValue2.toLowerCase() === 'папиллярных узоров' &&
        inputValue3.toLowerCase() === 'папиллярных узоров' &&
        inputValue4.toLowerCase() === 'папиллярных узоров' &&
        inputValue5.toLowerCase() === 'папиллярных узоров'

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
      <img width="640px" height="542px" src={p34} alt="p34"/>
      <div className="doc-content">
      П1. Имеются ли на представленных объектах следы
          <br/>
          <input placeholder="Заполните пропуск" id="19-2" style={{width: 180}}/>
          &nbsp;и, если да, то пригодны ли они для идентификации
          человека, оставившего их?
          <br/>
          Не оставлены ли следы
          <input placeholder="Заполните пропуск" id="19-3" style={{width: 180}}/>
          &nbsp;
          конкретным
          человеком?
          <br/>
          Какими пальцами и какой руки оставлены следы
          <input placeholder="Заполните пропуск" id="19-4" style={{width: 180}}/>
          &nbsp;
          <br/>
          Принадлежат ли следы
          <input placeholder="Заполните пропуск" id="19-5" style={{width: 180}}/>
          &nbsp;
          одному или
          нескольким лицам?
          <br/>
          Какова относительная давность следов
          <input placeholder="Заполните пропуск" id="19-6" style={{width: 180}}/>
          &nbsp;
          <br/>

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
    <Navigate to="/35" />
  );
};

export default Thirtyfour;
