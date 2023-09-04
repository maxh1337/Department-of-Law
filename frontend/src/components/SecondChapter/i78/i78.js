import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i78 from "../../../images/PART 2/i78.webp";
import Error from "../../ui/error/error";
import i78781 from "../../../images/PART 2/i78 78.1.webp";
import { doc78 } from "../../ui/allFiles2";

const I78 = () => {
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc78];

  const CheckAndRedirect = () => {
    const inputValue1 = document.getElementById("74-1").value;

    if (inputValue1.toLowerCase() === "товароведческой") {
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
        <img src={i78} width="640px" height="542px" alt="i78" />
        <input
          placeholder="Заполните"
          id="74-1"
          style={{
            width: "255px",
            position: "absolute",
            top: "244px",
            left: "calc(50% - 135px)",
          }}
        />
        <div className="Buttons">
          <button className="linkButton" onClick={CheckAndRedirect}>
            Проверить
          </button>
        </div>
      </div>
    ) : (
      <Error // 78.1
        loaded="true"
        image={i78781}
        onClick1={() => {
          setError(false);
        }}
        button1="Понятно"
        newButton={
          <button
            onClick={() => {
              navigate("/h78");
            }}
          >
            Не понятно
          </button>
        }
        button2style={{ display: "none" }}
      />
    )
  ) : (
    <Navigate to="/i79" />
  );
};

export default I78;
