import { useNavigate } from "react-router-dom";
import p12 from "../../images/p12.webp";
import { useState } from "react";
import Error from "../error/error";
import Criminal from "../ui/criminal-case/criminal-case";

function Twelve() {
  const way = JSON.parse(localStorage.getItem("mediumWay"));
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const step = JSON.parse(localStorage.getItem("step"));

  if (step !== 6) {
    localStorage.setItem("step", 6);
  }
  const nextPage1 = () => {
    navigate("/14");
    localStorage.setItem("step", 7);
  };
  const nextPage = () => {
    setError(true);
  };
  const setErrorNone = () => {
    setError(false);
  };
  return (
    <>
      {" "}
      {error === false ? (
        <div>
          <Criminal />
          <img src={p12} alt="2" width="640px" height="542px" />
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "98px",
              left: "calc(50% - 268px)",
              width: "200px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "130px",
              left: "calc(50% + 10px)",
              width: "240px",
              height: "77px",
            }}
            onClick={nextPage}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "213px",
              left: "calc(50% - 270px)",
              width: "230px",
              height: "85px",
            }}
            onClick={nextPage}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "271px",
              left: "calc(50% + 20px)",
              width: "270px",
              height: "85px",
            }}
            onClick={nextPage1}
          ></div>
        </div>
      ) : (
        <Error
          onClick1={setErrorNone}
          button1="Понятно"
          text="Статья 144 УПК РФ"
          button2style={{ display: "none" }}
          newButton={
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1xNBuRjMF6WrEE_I39d5oCKwZHIRm9JgW/view"
            >
              <button>Не понятно</button>
            </a>
          }
        />
      )}
    </>
  );
}
export default Twelve;
