import { Navigate, useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e48 from "../../../images/PART 3/e48.webp";
import Error from "../../ui/error/error";
import e48481 from "../../../images/PART 3/e48 48.1.webp";
import { useState } from "react";
import { doc48, doc48o1 } from "../../ui/allFiles3";

const E48 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const [firstCorrect, setFirstCorrect] = useState(false);
  const [secondCorrect, setSecondCorrect] = useState(false);
  const [thirdCorrect, setThirdCorrect] = useState(false);
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc48, doc48o1];

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e48} width="640px" height="542px" alt="e48" />
          <div
            className={
              thirdCorrect === false ? "button-cloud" : "button-cloud selected"
            }
            style={{
              position: "absolute",
              top: "150px",
              left: "calc(50% - 304px)",
              width: "440px",
              height: "70px",
            }}
            onClick={() => {
              localStorage.setItem("documents", JSON.stringify(newDocuments));
              setThirdCorrect(!thirdCorrect);
            }}
          ></div>
          <div
            className={
              firstCorrect === false ? "button-cloud" : "button-cloud selected"
            }
            style={{
              position: "absolute",
              top: "250px",
              left: "calc(50% - 184px)",
              width: "480px",
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
              top: "340px",
              left: "calc(50% - 304px)",
              width: "440px",
              height: "70px",
            }}
            onClick={() => {
              setSecondCorrect(!secondCorrect);
            }}
          ></div>
          <div // Ошибка 6.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "440px",
              left: "calc(50% - 104px)",
              width: "410px",
              height: "70px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
        </>
      ) : (
        <Error // 6.1
          loaded="true"
          image={e48481}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he48o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      )}
      {firstCorrect & thirdCorrect & (secondCorrect === true) ? (
        <Navigate to="/e49" />
      ) : null}
    </div>
  );
};

export default E48;
