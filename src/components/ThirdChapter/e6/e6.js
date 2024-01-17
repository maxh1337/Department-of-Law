import { Navigate, useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e6 from "../../../images/PART 3/e6.webp";
import Error from "../../ui/error/error";
import e631 from "../../../images/PART 3/e6 6.1.webp";
import e632 from "../../../images/PART 3/e6 6.2.webp";
import { useState } from "react";

const E6 = () => {
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
          <img src={e6} width="640px" height="542px" alt="e6" />
          <div // Ошибка 6.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "20px",
              left: "calc(50% - -44px)",
              width: "200px",
              height: "70px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div
            className={
              firstCorrect === false ? "button-cloud" : "button-cloud selected"
            }
            style={{
              position: "absolute",
              top: "120px",
              left: "calc(50% - -36px)",
              width: "260px",
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
              top: "220px",
              left: "calc(50% - -36px)",
              width: "260px",
              height: "70px",
            }}
            onClick={() => {
              setSecondCorrect(!secondCorrect);
            }}
          ></div>
          <div
            className={
              thirdCorrect === false ? "button-cloud" : "button-cloud selected"
            }
            style={{
              position: "absolute",
              top: "320px",
              left: "calc(50% - -36px)",
              width: "260px",
              height: "70px",
            }}
            onClick={() => {
              setThirdCorrect(!thirdCorrect);
            }}
          ></div>
          <div // Ошибка 6.2
            className="button-cloud"
            style={{
              position: "absolute",
              top: "420px",
              left: "calc(50% - -36px)",
              width: "260px",
              height: "70px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 6.1
          loaded="true"
          image={e631}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he6o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 6.2
          loaded="true"
          image={e632}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he6o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      )}
      {firstCorrect & thirdCorrect & (secondCorrect === true) ? (
        <Navigate to="/e7" />
      ) : null}
    </div>
  );
};

export default E6;
