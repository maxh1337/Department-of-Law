import { useNavigate } from "react-router-dom";
import Criminal from "../../ui/criminal-case/criminal-case";
import e47 from "../../../images/PART 3/e47.webp";
import Error from "../../ui/error/error";
import e47471 from "../../../images/PART 3/e47 47.1.webp";
import { useState } from "react";
import { doc47 } from "../../ui/allFiles3";

const E47 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const CheckAndRedirect = () => {
    const inputValue1 = document.getElementById("inp1").value;
    const inputValue2 = document.getElementById("inp2").value;
    const inputValue3 = document.getElementById("inp3").value;
    const documents = JSON.parse(localStorage.getItem("documents"));
    const newDocuments = [...documents, doc47];

    if (
      inputValue1.toLowerCase() === "повреждения" &&
      inputValue2.toLowerCase() === "локализация" &&
      inputValue3.toLowerCase() === "повреждений"
    ) {
      localStorage.setItem("documents", JSON.stringify(newDocuments));
      navigate("/e48");
    } else {
      setError(true);
    }
  };

  return (
    <>
      {error === false ? (
        <div>
          <Criminal />
          <img src={e47} alt="e47" width="640px" height="542px" />
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
              left: "calc(50% - 120px)",
            }}
          >
            <input
              placeholder="(Ответ1)"
              id="inp1"
              style={{
                position: "absolute",
                top: "66px",
                left: "calc(50% - 32px)",
                width: "164px",
              }}
            />
            <input
              placeholder="(Ответ2)"
              id="inp2"
              style={{
                position: "absolute",
                top: "142px",
                left: "calc(50% - 95px)",
                width: "224px",
              }}
            />
            <input
              placeholder="(Ответ3)"
              id="inp3"
              style={{
                position: "absolute",
                top: "160px",
                left: "calc(50% - 28px)",
                width: "164px",
              }}
            />
          </div>
        </div>
      ) : (
        <Error
          loaded="true"
          image={e47471}
          onClick1={() => {
            setError(false);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he47o1");
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

export default E47;
