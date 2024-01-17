import CriminalCase from "../../ui/criminal-case/criminal-case";
import i23 from "../../../images/PART 2/i23.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Error from "../../ui/error/error";
import i23231 from "../../../images/PART 2/i23 23.1.webp";
import i23232 from "../../../images/PART 2/i23 23.2.webp";
import i23233 from "../../../images/PART 2/i23 23.3.webp";

const I23 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i24");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i23} width="640px" height="542px" alt="i23" />
          <div // Ошибка 22.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "149px",
              left: "calc(50% - 300px)",
              width: "260px",
              height: "70px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Правильный вариант
            className="button-cloud"
            style={{
              position: "absolute",
              top: "149px",
              left: "calc(50% - 10px)",
              width: "260px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 22.2
            className="button-cloud"
            style={{
              position: "absolute",
              top: "244px",
              left: "calc(50% - 300px)",
              width: "260px",
              height: "70px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div // Ошибка 22.3
            className="button-cloud"
            style={{
              position: "absolute",
              top: "238px",
              left: "calc(50% - -30px)",
              width: "260px",
              height: "70px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 22.1
          loaded="true"
          image={i23231}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h23");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 22.2
          loaded="true"
          image={i23232} // Тут должно будет быть i331
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h23");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 2.3
          loaded="true"
          image={i23233}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h23");
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

export default I23;
