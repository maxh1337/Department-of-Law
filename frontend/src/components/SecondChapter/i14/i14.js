import CriminalCase from "../../ui/criminal-case/criminal-case";
import i14 from "../../../images/PART 2/i14.webp";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Error from "../../ui/error/error";
import i14141 from "../../../images/PART 2/i14 14.1.webp";

const I14 = () => {
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const CheckAndRedirect = () => {
    const inputValue1 = document.getElementById("19-1").value; // Было 19-i1
    const inputValue2 = document.getElementById("19-2").value;
    console.log(inputValue1, " ", inputValue2);

    if (
      inputValue1.toLowerCase() === "имущественный" &&
      (inputValue2.toLowerCase() === "42 упк рф" ||
        inputValue2.toLowerCase() ===
          "42 уголовно-процессуального кодекса российской федерации" ||
        inputValue2.toLowerCase() === "42 уголовно-процессуального кодекса рф")
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
        <img src={i14} width="640px" height="542px" alt="i14" />
        <input
          placeholder="Заполните пропуск"
          id="19-1"
          style={{
            width: "214px",
            position: "absolute",
            top: "324px",
            left: "calc(50% - 132px)",
          }}
        />
        <input
          placeholder="Заполните пропуск"
          id="19-2"
          style={{
            width: "239px",
            position: "absolute",
            top: "379px",
            left: "calc(50% - 132px)",
          }}
        />
        <div className="Buttons">
          <button className="linkButton" onClick={CheckAndRedirect}>
            Проверить
          </button>
        </div>
      </div>
    ) : (
      <Error // 14.1
        loaded="true"
        image={i14141}
        onClick1={() => {
          setError(false);
        }}
        button1="Понятно"
        newButton={
          <button
            onClick={() => {
              navigate("/h14");
            }}
          >
            Не понятно
          </button>
        }
        button2style={{ display: "none" }}
      />
    )
  ) : (
    <Navigate to="/i15" />
  );
};

export default I14;
