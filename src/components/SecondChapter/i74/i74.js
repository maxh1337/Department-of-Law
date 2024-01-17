import { Navigate, useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i74 from "../../../images/PART 2/i74.webp";
import Error from "../../ui/error/error";
import i74741 from "../../../images/PART 2/i74 74.1.webp";
import { useState } from "react";
import { doc74 } from "../../ui/allFiles2";

const I74 = () => {
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc74];

  const CheckAndRedirect = () => {
    const inputValue1 = document.getElementById("74-1").value;

    if (inputValue1.toLowerCase() === "трасологической") {
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
        <img src={i74} width="640px" height="542px" alt="i74" />
        <input
          placeholder="Заполните"
          id="74-1"
          style={{
            width: "255px",
            position: "absolute",
            top: "241px",
            left: "calc(50% - 130px)",
          }}
        />
        <div className="Buttons">
          <button className="linkButton" onClick={CheckAndRedirect}>
            Проверить
          </button>
        </div>
      </div>
    ) : (
      <Error // 74.1
        loaded="true"
        image={i74741}
        onClick1={() => {
          setError(false);
        }}
        button1="Понятно"
        newButton={
          <button
            onClick={() => {
              navigate("/h74");
            }}
          >
            Не понятно
          </button>
        }
        button2style={{ display: "none" }}
      />
    )
  ) : (
    <Navigate to="/i75" />
  );
};

export default I74;
