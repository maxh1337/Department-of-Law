import CriminalCase from "../../ui/criminal-case/criminal-case";
import e55 from "../../../images/PART 3/e55.webp";
import Error from "../../ui/error/error";
import e55551 from "../../../images/PART 3/e55 55.1.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const E55 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const [firstCorrect, setFirstCorrect] = useState(false);
  const [secondCorrect, setSecondCorrect] = useState(false);
  const [thirdCorrect, setThirdCorrect] = useState(false);
  const [fourthCorrect, setFourthCorrect] = useState(false);
  const [fifthCorrect, setFifthCorrect] = useState(false);
  const [sixthCorrect, setSixthCorrect] = useState(false);
  const nextPage = () => {
    if (firstCorrect && thirdCorrect) {
      navigate("/e56");
    } else {
      setError(1);
    }
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e55} width="640px" height="542px" alt="e55" />
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
              left: "calc(50% - 323px)",
              width: "310px",
              height: "74px",
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
              left: "calc(50% + 20px)",
              width: "250px",
              height: "74px",
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
              top: "255px",
              left: "calc(50% - 303px)",
              width: "290px",
              height: "70px",
            }}
            onClick={() => {
              setThirdCorrect(!thirdCorrect);
            }}
          ></div>
          <div // Ошибка 3.1
            className={
              fourthCorrect === false ? "button-cloud" : "button-cloud selected"
            }
            style={{
              position: "absolute",
              top: "255px",
              left: "calc(50% + 50px)",
              width: "210px",
              height: "70px",
            }}
            onClick={() => {
              setFourthCorrect(!fourthCorrect);
            }}
          ></div>
          <div
            className={
              fifthCorrect === false ? "button-cloud" : "button-cloud selected"
            }
            style={{
              position: "absolute",
              top: "345px",
              left: "calc(50% - 303px)",
              width: "300px",
              height: "70px",
            }}
            onClick={() => {
              setFifthCorrect(!fifthCorrect);
            }}
          ></div>
          <div // Ошибка 3.1
            className={
              sixthCorrect === false ? "button-cloud" : "button-cloud selected"
            }
            style={{
              position: "absolute",
              top: "345px",
              left: "calc(50% + 50px)",
              width: "250px",
              height: "110px",
            }}
            onClick={() => {
              setSixthCorrect(!sixthCorrect);
            }}
          ></div>
        </>
      ) : (
        <Error // 49.1
          loaded="true"
          image={e55551}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he55o1");
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

export default E55;
