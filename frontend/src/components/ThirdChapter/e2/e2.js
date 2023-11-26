import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e2 from "../../../images/PART 3/e2.webp";
import Error from "../../ui/error/error";
import e231 from "../../../images/PART 3/e2 2.1.webp";
import e232 from "../../../images/PART 3/e2 2.2.webp";

const E2 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const [firstCorrect, setFirstCorrect] = useState(false);
  const [secondCorrect, setSecondCorrect] = useState(false);

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e2} width="640px" height="542px" alt="e2" />
          <div
            className={
              firstCorrect === false ? "button-cloud" : "button-cloud selected"
            }
            style={{
              position: "absolute",
              top: "172px",
              left: "calc(50% - 313px)",
              width: "344px",
              height: "70px",
            }}
            onClick={() => {
              setFirstCorrect(!firstCorrect);
            }}
          ></div>
          <div // Ошибка 2.1 Прокурор
            className="button-cloud"
            style={{
              position: "absolute",
              top: "172px",
              left: "calc(50% - -84px)",
              width: "200px",
              height: "70px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 2.2 СОБР
            className="button-cloud"
            style={{
              position: "absolute",
              top: "290px",
              left: "calc(50% + 70px)",
              width: "220px",
              height: "70px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div
            className={
              secondCorrect === false ? "button-cloud" : "button-cloud selected"
            }
            style={{
              position: "absolute",
              top: "290px",
              left: "calc(50% - 313px)",
              width: "344px",
              height: "70px",
            }}
            onClick={() => {
              setSecondCorrect(!secondCorrect);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 2.1
          loaded="true"
          image={e231}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he2o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 2.2
          loaded="true"
          image={e232}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he2o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      )}
      {firstCorrect & (secondCorrect === true) ? <Navigate to="/e3" /> : null}
    </div>
  );
};

export default E2;
