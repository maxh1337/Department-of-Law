import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i93 from "../../../images/PART 2/i93.webp";
import Error from "../../ui/error/error";
import i93931 from "../../../images/PART 2/i93 93.1.webp";

const I93 = () => {
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const CheckAndRedirect = () => {
    const inputValue1 = document.getElementById("93-1").value;

    if (
      inputValue1.toLowerCase() === "обвинительного заключения" ||
      inputValue1.toLowerCase() === "обвинительное заключение"
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
        <img src={i93} width="640px" height="542px" alt="i93" />
        <input
          placeholder="Заполните"
          id="93-1"
          style={{
            width: "240px",
            position: "absolute",
            top: "164px",
            left: "calc(50% - 122px)",
          }}
        />
        <div className="Buttons">
          <button className="linkButton" onClick={CheckAndRedirect}>
            Проверить
          </button>
        </div>
      </div>
    ) : (
      <Error // 93.1
        loaded="true"
        image={i93931}
        onClick1={() => {
          setError(false);
        }}
        button1="Понятно"
        newButton={
          <button
            onClick={() => {
              navigate("/h93");
            }}
          >
            Не понятно
          </button>
        }
        button2style={{ display: "none" }}
      />
    )
  ) : (
    <Navigate to="/i94" />
  );
};

export default I93;
