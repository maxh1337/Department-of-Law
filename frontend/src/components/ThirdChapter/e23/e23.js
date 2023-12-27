import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Criminal from "../../ui/criminal-case/criminal-case";
import e23 from "../../../images/PART 3/e23.webp";
import e23231 from "../../../images/PART 3/e23 23.1.webp";
import Error from "../../ui/error/error";
import { doc23 } from "../../ui/allFiles3";

const E23 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc23];

  const CheckAndRedirect = () => {
    const inputValue = document.getElementById("inp1").value;
    if (
      inputValue.toLowerCase() === "постановление" ||
      inputValue.toLowerCase() === "постановлением"
    ) {
      localStorage.setItem("documents", JSON.stringify(newDocuments));
      navigate("/e24");
    } else {
      setError(true);
    }
  };

  return (
    <>
      {error === false ? (
        <div>
          <Criminal />
          <img src={e23} alt="e23" width="640px" height="542px" />
          <div
            className="in-book"
            style={{
              textAlign: "center",
              marginTop: "50px",
              position: "absolute",
              top: "112px",
              left: "calc(50% - 85px)",
            }}
          >
            <br />
            <br />
            <input placeholder="(Ответ)" id="inp1" />
            <br />
            <br />
            <button onClick={CheckAndRedirect}>Ответить</button>
          </div>
        </div>
      ) : (
        <Error
          loaded="true"
          image={e23231}
          onClick1={() => {
            setError(false);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he23o1");
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

export default E23;
