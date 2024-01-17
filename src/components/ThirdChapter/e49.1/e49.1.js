import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e49 from "../../../images/PART 3/e49.1.webp";
import Error from "../../ui/error/error";
import e49491 from "../../../images/PART 3/e49 49.1.webp";
import e49492 from "../../../images/PART 3/e49 49.2.webp";
import e49493 from "../../../images/PART 3/e49 49.3.webp";
import { useState } from "react";
import { doc45, doc49, doc49o1, doc49o2 } from "../../ui/allFiles3";

const E491 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const [firstCorrect, setFirstCorrect] = useState(false);
  const [secondCorrect, setSecondCorrect] = useState(false);
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc49, doc49o1, doc49o2];

  const nextPage = () => {
    if (firstCorrect && secondCorrect) {
      localStorage.setItem("documents", JSON.stringify(newDocuments));
      navigate("/e50");
    } else if (
      (!firstCorrect && secondCorrect) ||
      (firstCorrect && !secondCorrect)
    ) {
      setError(1);
    }
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e49} width="640px" height="542px" alt="e49" />
          <div className="Buttons">
            <button className="linkButton" onClick={nextPage}>
              Проверить
            </button>
          </div>
          <div
            className={
              firstCorrect === false ? "button-cloud" : "button-cloud selected"
            }
            style={{
              position: "absolute",
              top: "165px",
              left: "calc(50% - 303px)",
              width: "250px",
              height: "70px",
            }}
            onClick={() => {
              setFirstCorrect(!firstCorrect);
            }}
          ></div>
          <div
            className={
              secondCorrect === false ? "button-cloud" : "button-cloud selected"
            }
            style={{
              position: "absolute",
              top: "165px",
              left: "calc(50% + 50px)",
              width: "250px",
              height: "70px",
            }}
            onClick={() => {
              setSecondCorrect(!secondCorrect);
            }}
          ></div>
          <div
            className="button-cloud" // Ошибка 3.1
            style={{
              position: "absolute",
              top: "275px",
              left: "calc(50% - 303px)",
              width: "250px",
              height: "70px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div // Ошибка 3.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "275px",
              left: "calc(50% + 50px)",
              width: "250px",
              height: "70px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 49.1
          loaded="true"
          image={e49491}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he49o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 49.2
          loaded="true"
          image={e49492}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he49o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 49.3
          loaded="true"
          image={e49493}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he49o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      )}
    </div>
  );
};

export default E491;
