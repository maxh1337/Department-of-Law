import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i54 from "../../../images/PART 2/i54.webp";
import Error from "../../ui/error/error";
import i54541 from "../../../images/PART 2/i54 54.1.webp";
import { doc54 } from "../../ui/allFiles2";

const I54 = () => {
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc54];

  const CheckAndRedirect = () => {
    const inputValue1 = document.getElementById("54-1").value;

    if (
      inputValue1.toLowerCase() === "два" ||
      inputValue1.toLowerCase() === "двух" ||
      inputValue1.toLowerCase() === "2-х" ||
      inputValue1.toLowerCase() === "2х"
    ) {
      setRedirect(true);
      localStorage.setItem("documents", JSON.stringify(newDocuments));
    } else {
      setError(true);
    }
  };
  return redirect === false ? (
    error === false ? (
      <div>
        <CriminalCase />
        <img src={i54} width="640px" height="542px" alt="i54" />
        <input
          placeholder="Заполните"
          id="54-1"
          style={{
            width: "70px",
            position: "absolute",
            top: "277px",
            left: "calc(50% - 97px)",
          }}
        />
        <div className="Buttons">
          <button className="linkButton" onClick={CheckAndRedirect}>
            Проверить
          </button>
        </div>
      </div>
    ) : (
      <Error // 54.1
        loaded="true"
        image={i54541}
        onClick1={() => {
          setError(false);
        }}
        button1="Понятно"
        newButton={
          <button
            onClick={() => {
              navigate("/h54");
            }}
          >
            Не понятно
          </button>
        }
        button2style={{ display: "none" }}
      />
    )
  ) : (
    <Navigate to="/i55" />
  );
};

export default I54;
