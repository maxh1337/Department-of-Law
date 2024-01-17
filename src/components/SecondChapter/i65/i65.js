import { Navigate, useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i65 from "../../../images/PART 2/i65.webp";
import { useState } from "react";
import Error from "../../ui/error/error";
import i14141 from "../../../images/PART 2/i14 14.1.webp";
import { doc65 } from "../../ui/allFiles2";

const I65 = () => {
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc65];

  const CheckAndRedirect = () => {
    const inputValue1 = document.getElementById("65-1").value;

    if (
      inputValue1.toLowerCase() === "вещественных доказательств" ||
      inputValue1.toLowerCase() === "вещественного доказательства"
    ) {
      localStorage.setItem("documents", JSON.stringify(newDocuments));
      setRedirect(true);
    } else {
      setError(true);
    }
  };
  return redirect === false ? (
    error === false ? (
      <div>
        <CriminalCase />
        <img src={i65} width="640px" height="542px" alt="i65" />
        <input
          placeholder="Заполните"
          id="65-1"
          style={{
            width: "355px",
            position: "absolute",
            top: "163px",
            left: "calc(50% - 203px)",
          }}
        />
        <div className="Buttons">
          <button className="linkButton" onClick={CheckAndRedirect}>
            Проверить
          </button>
        </div>
      </div>
    ) : (
      <Error // 65.1
        loaded="true"
        image={i14141}
        onClick1={() => {
          setError(false);
        }}
        button1="Понятно"
        newButton={
          <button
            onClick={() => {
              navigate("/h65");
            }}
          >
            Не понятно
          </button>
        }
        button2style={{ display: "none" }}
      />
    )
  ) : (
    <Navigate to="/i66" />
  );
};

export default I65;
