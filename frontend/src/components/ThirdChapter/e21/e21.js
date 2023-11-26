import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e21 from "../../../images/PART 3/e21.webp";
import Error from "../../ui/error/error";
import e from "../../../images/PART 3/E example clean.png";

const E21 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const [firstCorrect, setFirstCorrect] = useState(false);
  const [secondCorrect, setSecondCorrect] = useState(false);

  const nextPage = () => {
    navigate("/e22");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e21} width="640px" height="542px" alt="e21" />
          <div // Ошибка 21.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "172px",
              left: "calc(50% - 313px)",
              width: "304px",
              height: "70px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 21.2
            className="button-cloud"
            style={{
              position: "absolute",
              top: "172px",
              left: "calc(50% - -14px)",
              width: "290px",
              height: "74px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div // Ошибка 21.3
            className="button-cloud"
            style={{
              position: "absolute",
              top: "290px",
              left: "calc(50% + 60px)",
              width: "220px",
              height: "70px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "287px",
              left: "calc(50% - 313px)",
              width: "304px",
              height: "74px",
            }}
            onClick={nextPage}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 21.1
          loaded="true"
          image={e}
          eText="Новое процессуальное действие?"
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he21o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 21.2
          loaded="true"
          image={e}
          eText="Без экспертизы не обойтись?"
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he21o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 21.3
          loaded="true"
          image={e}
          eText="Что-то новенькое!"
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he21o2");
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

export default E21;
