import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import p36 from "../../images/p36.webp"
import Error from "../error/error";
import Criminal from "../ui/criminal-case/criminal-case"

const Thirtysix = () => {
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const CheckAndRedirect3 = () => {
    const inputValue1 = document.getElementById("19-4").value
    const inputValue2 = document.getElementById("19-4-1").value
    const inputValue3 = document.getElementById("19-4-2").value
    const inputValue4 = document.getElementById("19-4-3").value
    const inputValue5 = document.getElementById("19-4-4").value
    if (
        inputValue1.toLowerCase() === 'обуви' ||
        inputValue2.toLowerCase() === 'пол, возраст, рост' ||
        inputValue2.toLowerCase() === 'пол, рост, возраст' ||
        inputValue2.toLowerCase() === 'возраст, рост, пол' ||
        inputValue2.toLowerCase() === 'возраст, пол, рост' ||
        inputValue2.toLowerCase() === 'рост, возраст, пол' ||
        inputValue2.toLowerCase() === 'рост, пол, возраст' ||
        inputValue3.toLowerCase() === 'направлении' ||
        inputValue4.toLowerCase() === 'следы' ||
        inputValue5.toLowerCase() === 'обувь'
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
        <img width="640px" height="542px" src={p36} alt="p36"/>
        <div className="doc-content">
        Каков вид и размер
                <br/>
                <input placeholder="Заполните пропуск" id="19-4" style={{width: 180}}/>
                &nbsp;оставившей следы?
                <br/>
                Каковы физические данные
                <input placeholder="Заполните пропуск" id="19-4-1" style={{width: 180}}/>
                &nbsp;
                человека,
                оставившего данные следы?
                <br/>
                В каком
                <input placeholder="Заполните пропуск" id="19-4-2" style={{width: 180}}/>
                &nbsp;
                и каким образом передвигался человек, оставивший следы?
                <br/>
                Как давно оставлены
                <input placeholder="Заполните пропуск" id="19-4-3" style={{width: 180}}/>
                &nbsp;
                ?
                <br/>
                Какие особенности имеет
                <input placeholder="Заполните пропуск" id="19-4-4" style={{width: 180}}/>
                &nbsp;
                следы которой обнаружены на
                месте происшествия?
                <br/>

                <button onClick={CheckAndRedirect3}>Проверить</button>
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

export default Thirtysix;