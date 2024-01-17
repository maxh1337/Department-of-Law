import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i68 from "../../../images/PART 2/i68.webp";
import Error from "../../ui/error/error";
import i14141 from "../../../images/PART 2/i14 14.1.webp";
import { doc68, doc68o1 } from "../../ui/allFiles2";

const I68 = () => {
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc68, doc68o1];

  const CheckAndRedirect = () => {
    const inputValue1 = document.getElementById("65-1").value;

    if (inputValue1.toLowerCase() === "суда") {
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
        <img src={i68} width="640px" height="542px" alt="i68" />
        <input
          placeholder="Заполните"
          id="65-1"
          style={{
            width: "220px",
            position: "absolute",
            top: "57px",
            left: "calc(50% - 110px)",
          }}
        />
        <div className="Buttons">
          <button className="linkButton" onClick={CheckAndRedirect}>
            Проверить
          </button>
        </div>
      </div>
    ) : (
      <Error // 68.1
        loaded="true"
        image={i14141}
        onClick1={() => {
          setError(false);
        }}
        button1="Понятно"
        newButton={
          <button
            onClick={() => {
              navigate("/h68");
            }}
          >
            Не понятно
          </button>
        }
        button2style={{ display: "none" }}
      />
    )
  ) : (
    <Navigate to="/i69" />
  );
};

export default I68;
