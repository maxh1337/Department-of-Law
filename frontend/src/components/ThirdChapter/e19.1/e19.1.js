import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e19 from "../../../images/PART 3/e19.1.jpg";
import Error from "../../ui/error/error";
import e18181 from "../../../images/PART 3/e18 18.1.webp";

const E191 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const [firstCorrect, setFirstCorrect] = useState(false);
  const [secondCorrect, setSecondCorrect] = useState(false);
  const [thirdCorrect, setThirdCorrect] = useState(false);

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e19} width="640px" height="542px" alt="e19" />
          <div // Ошибочный вариант
            className="multiple-cloud"
            style={{
              position: "absolute",
              top: "156px",
              left: "calc(50% - 277px)",
              width: "30px",
              height: "30px",
            }}
            onClick={() => setError(1)}
          ></div>
          <div
            className={
              firstCorrect === false
                ? "multiple-cloud"
                : "multiple-cloud selected"
            }
            style={{
              position: "absolute",
              top: "320px",
              left: "calc(50% - 277px)",
              width: "30px",
              height: "30px",
            }}
            onClick={() => {
              setFirstCorrect(!firstCorrect);
            }}
          ></div>
          <div // Ошибочный вариант
            className="multiple-cloud"
            style={{
              position: "absolute",
              top: "500px",
              left: "calc(50% - 288px)",
              width: "30px",
              height: "30px",
            }}
            onClick={() => setError(1)}
          ></div>
          {/*//Правая сторона*/}
          <div
            className={
              secondCorrect === false
                ? "multiple-cloud"
                : "multiple-cloud selected"
            }
            style={{
              position: "absolute",
              top: "155px",
              left: "calc(50% - -20px)",
              width: "30px",
              height: "30px",
            }}
            onClick={() => {
              setSecondCorrect(!secondCorrect);
            }}
          ></div>
          <div
            className="multiple-cloud"
            style={{
              position: "absolute",
              top: "326px",
              left: "calc(50% - -30px)",
              width: "30px",
              height: "30px",
            }}
            onClick={() => setError(1)}
          ></div>
          <div
            className={
              thirdCorrect === false
                ? "multiple-cloud"
                : "multiple-cloud selected"
            }
            style={{
              position: "absolute",
              top: "500px",
              left: "calc(50% - -25px)",
              width: "30px",
              height: "30px",
            }}
            onClick={() => setThirdCorrect(!thirdCorrect)}
          ></div>
        </>
      ) : (
        <Error // 19.1
          loaded="true"
          image={e18181}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he19o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      )}
      {firstCorrect & thirdCorrect & (secondCorrect === true) ? (
        <Navigate to="/e20" />
      ) : null}
    </div>
  );
};

export default E191;
