import { Navigate, useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e43 from "../../../images/PART 3/e43.webp";
import Error from "../../ui/error/error";
import e43431 from "../../../images/PART 3/e43 43.1.jpg";
import { useState } from "react";

const E43 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const [firstCorrect, setFirstCorrect] = useState(false);
  const [secondCorrect, setSecondCorrect] = useState(false);
  const [thirdCorrect, setThirdCorrect] = useState(false);
  const [firstCorrectRight, setFirstCorrectRight] = useState(false);
  const [secondCorrectRight, setSecondCorrectRight] = useState(false);
  const [thirdCorrectRight, setThirdCorrectRight] = useState(false);

  const nextPage = () => {
    if (
      firstCorrect &
      thirdCorrect &
      firstCorrectRight &
      thirdCorrectRight &
      secondCorrectRight &
      (secondCorrect === true)
    ) {
      navigate("/e44");
    } else {
      setError(1);
    }
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e43} width="640px" height="542px" alt="e43" />
          <div className="Buttons">
            <button className="linkButton" onClick={nextPage}>
              Проверить
            </button>
          </div>
          <div
            className={
              firstCorrect === false
                ? "multiple-cloud green"
                : "multiple-cloud selected"
            }
            style={{
              position: "absolute",
              top: "226px",
              left: "calc(50% - 210px)",
              width: "30px",
              height: "30px",
            }}
            onClick={() => setFirstCorrect(!firstCorrect)}
          ></div>
          <div
            className={
              secondCorrect === false
                ? "multiple-cloud green"
                : "multiple-cloud selected"
            }
            style={{
              position: "absolute",
              top: "310px",
              left: "calc(50% - 210px)",
              width: "30px",
              height: "30px",
            }}
            onClick={() => {
              setSecondCorrect(!secondCorrect);
            }}
          ></div>
          <div
            className={
              thirdCorrect === false
                ? "multiple-cloud green"
                : "multiple-cloud selected"
            }
            style={{
              position: "absolute",
              top: "370px",
              left: "calc(50% - 210px)",
              width: "30px",
              height: "30px",
            }}
            onClick={() => {
              setThirdCorrect(!thirdCorrect);
            }}
          ></div>
          <div
            className={
              firstCorrectRight === false
                ? "multiple-cloud green"
                : "multiple-cloud selected"
            }
            style={{
              position: "absolute",
              top: "216px",
              left: "calc(50% - -195px)",
              width: "30px",
              height: "30px",
            }}
            onClick={() => {
              setFirstCorrectRight(!firstCorrectRight);
            }}
          ></div>
          <div
            className={
              secondCorrectRight === false
                ? "multiple-cloud green"
                : "multiple-cloud selected"
            }
            style={{
              position: "absolute",
              top: "300px",
              left: "calc(50% - -195px)",
              width: "30px",
              height: "30px",
            }}
            onClick={() => {
              setSecondCorrectRight(!secondCorrectRight);
            }}
          ></div>
          <div
            className={
              thirdCorrectRight === false
                ? "multiple-cloud green"
                : "multiple-cloud selected"
            }
            style={{
              position: "absolute",
              top: "370px",
              left: "calc(50% - -195px)",
              width: "30px",
              height: "30px",
            }}
            onClick={() => setThirdCorrectRight(!thirdCorrectRight)}
          ></div>
        </>
      ) : (
        <Error // 43.1
          loaded="true"
          image={e43431}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he43o1");
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

export default E43;
