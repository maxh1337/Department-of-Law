import { Navigate, useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i75 from "../../../images/PART 2/i75.png";
import Error from "../../ui/error/error";
import i75751 from "../../../images/PART 2/i75 75.1.webp";
import { useState } from "react";

const I75 = () => {
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const CheckAndRedirect = () => {
    const inputValue1 = document.getElementById("75-1").value;
    const inputValue2 = document.getElementById("75-2").value;
    const inputValue3 = document.getElementById("75-3").value;

    if (
      inputValue1.toLowerCase() === "след обуви" &&
      inputValue2.toLowerCase() === "рост" &&
      inputValue3.toLowerCase() === "следы обувью"
    ) {
      setRedirect(true);
    } else {
      setError(true);
    }
  };
  return redirect === false ? (
    error === false ? (
      <div>
        <CriminalCase />
        <img src={i75} width="640px" height="542px" alt="i75" />
        <input
          placeholder="Заполните"
          id="75-1"
          style={{
            width: "178px",
            position: "absolute",
            top: "201px",
            left: "calc(50% - 226px)",
          }}
        />
        <input
          placeholder="Заполните"
          id="75-2"
          style={{
            width: "140px",
            position: "absolute",
            top: "341px",
            left: "calc(50% - 146px)",
          }}
        />
        <input
          placeholder="Заполните"
          id="75-3"
          style={{
            width: "225px",
            position: "absolute",
            top: "322px",
            left: "calc(50% - -35px)",
          }}
        />
        <div className="Buttons">
          <button className="linkButton" onClick={CheckAndRedirect}>
            Проверить
          </button>
        </div>
      </div>
    ) : (
      <Error // 75.1
        loaded="true"
        image={i75751}
        onClick1={() => {
          setError(false);
        }}
        button1="Понятно"
        newButton={
          <button
            onClick={() => {
              navigate("/h75");
            }}
          >
            Не понятно
          </button>
        }
        button2style={{ display: "none" }}
      />
    )
  ) : (
    <Navigate to="/i76" />
  );
};

export default I75;
