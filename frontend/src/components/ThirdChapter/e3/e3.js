import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e3 from "../../../images/PART 3/e3.webp";
import Error from "../../ui/error/error";
import e331 from "../../../images/PART 3/e3 3.1.webp";

const E3 = () => {
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
          <img src={e3} width="640px" height="542px" alt="e3" />
          <div
            className={
              firstCorrect === false ? "button-cloud" : "button-cloud selected"
            }
            style={{
              position: "absolute",
              top: "172px",
              left: "calc(50% - 313px)",
              width: "250px",
              height: "70px",
            }}
            onClick={() => {
              setFirstCorrect(!firstCorrect);
            }}
          ></div>
          <div
            className="button-cloud" // Ошибка 3.1
            style={{
              position: "absolute",
              top: "290px",
              left: "calc(50% - 313px)",
              width: "250px",
              height: "70px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div
            className={
              thirdCorrect === false ? "button-cloud" : "button-cloud selected"
            }
            style={{
              position: "absolute",
              top: "412px",
              left: "calc(50% - 300px)",
              width: "300px",
              height: "70px",
            }}
            onClick={() => {
              setThirdCorrect(!thirdCorrect);
            }}
          ></div>
          <div
            className={
              secondCorrect === false ? "button-cloud" : "button-cloud selected"
            }
            style={{
              position: "absolute",
              top: "172px",
              left: "calc(50% + 0px)",
              width: "300px",
              height: "70px",
            }}
            onClick={() => {
              setSecondCorrect(!secondCorrect);
            }}
          ></div>
          <div // Ошибка 3.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "290px",
              left: "calc(50% + 0px)",
              width: "300px",
              height: "70px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 3.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "412px",
              left: "calc(50% + 40px)",
              width: "220px",
              height: "70px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
        </>
      ) : (
        <Error // 3.1
          loaded="true"
          image={e331}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he3o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      )}
      {firstCorrect & thirdCorrect & (secondCorrect === true) ? (
        <Navigate to="/e4" />
      ) : null}
    </div>
  );
};

export default E3;
