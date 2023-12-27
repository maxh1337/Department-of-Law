import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Criminal from "../../ui/criminal-case/criminal-case";
import e40 from "../../../images/PART 3/e40.webp";
import Error from "../../ui/error/error";
import e40401 from "../../../images/PART 3/e40 40.1.webp";

const E40 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const CheckAndRedirect = () => {
    const inputValue1 = document.getElementById("inp1").value;
    const inputValue2 = document.getElementById("inp2").value;

    if (
      (inputValue1.toLowerCase() === "физический и моральный" ||
        inputValue1.toLowerCase() === "моральный, физический" ||
        inputValue1.toLowerCase() === "физический, моральный") &&
      (inputValue2.toLowerCase() === "42 упк рф" ||
        inputValue2.toLowerCase() ===
          "42 уголовно-процессуального кодекса российской федерации" ||
        inputValue2.toLowerCase() === "42 уголовно-процессуального кодекса рф")
    ) {
      navigate("/e41");
    } else {
      setError(true);
    }
  };

  return (
    <>
      {error === false ? (
        <div>
          <Criminal />
          <img src={e40} alt="e40" width="640px" height="542px" />
          <div className="Buttons">
            <button className="linkButton" onClick={CheckAndRedirect}>
              Ответить
            </button>
          </div>
          <div
            className="in-book"
            style={{
              textAlign: "center",
              marginTop: "50px",
              position: "absolute",
              top: "232px",
              left: "calc(50% - 120px)",
            }}
          >
            <br />
            <br />
            <input placeholder="(Ответ)" id="inp1" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <input placeholder="(Ответ)" id="inp2" />
          </div>
        </div>
      ) : (
        <Error
          loaded="true"
          image={e40401}
          onClick1={() => {
            setError(false);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he40o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      )}
    </>
  );
};

export default E40;
