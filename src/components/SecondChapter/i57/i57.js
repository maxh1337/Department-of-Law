import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i57 from "../../../images/PART 2/i57.webp";
import Error from "../../ui/error/error";
import i57571 from "../../../images/PART 2/i57 57.1.webp";

const I57 = () => {
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const CheckAndRedirect = () => {
    const inputValue1 = document.getElementById("57-1").value;

    if (
      inputValue1.toLowerCase() === "меры пресечения" ||
      inputValue1.toLowerCase() === "мера пресечения" ||
      inputValue1.toLowerCase() === "мер пресечения"
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
        <img src={i57} width="640px" height="542px" alt="i57" />
        <input
          placeholder="Заполните это место"
          id="57-1"
          style={{
            width: "350px",
            position: "absolute",
            top: "390px",
            left: "calc(50% - 180px)",
          }}
        />
        <div className="Buttons">
          <button className="linkButton" onClick={CheckAndRedirect}>
            Проверить
          </button>
        </div>
      </div>
    ) : (
      <Error // 57.1
        loaded="true"
        image={i57571}
        onClick1={() => {
          setError(false);
        }}
        button1="Понятно"
        newButton={
          <button
            onClick={() => {
              navigate("/h57");
            }}
          >
            Не понятно
          </button>
        }
        button2style={{ display: "none" }}
      />
    )
  ) : (
    <Navigate to="/i58" />
  );
};

export default I57;
