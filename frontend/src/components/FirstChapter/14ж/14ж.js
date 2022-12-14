import { useState } from "react";
import { useNavigate } from "react-router-dom";
import doc2 from "../../../images/doc2.webp";
import Criminal from "../../ui/criminal-case/criminal-case";
import Error from "../../ui/error/error";

function FourteenJ() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const step = JSON.parse(localStorage.getItem("step"));
  if (step !== 8) {
    localStorage.setItem("step", 8);
  }
  const CheckAndRedirect = () => {
    const inputValue = document.getElementById("inp1").value;
    if (inputValue.toLowerCase() === "понятые") {
      navigate("/15");
      localStorage.setItem("step", 9);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {error === false ? (
        <div>
          <Criminal />
          <img src={doc2} alt="5" width="640px" height="542px" />
          <div
            className="in-book"
            style={{ textAlign: "center", marginTop: "50px" }}
          >
            Кто мне еще понадобится на омп?
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
          text="Подумай!"
          onClick1={() => {
            setError(false);
          }}
          button1="Понятно"
          newButton={
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1O6yiHCOluYvXHOBbVOBF3B_bI-JN9ufb/view"
            >
              {" "}
              <button>Не понятно</button>
            </a>
          }
          button2style={{ display: "none" }}
        />
      )}
    </>
  );
}

export default FourteenJ;
