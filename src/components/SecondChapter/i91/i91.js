import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i91 from "../../../images/PART 2/i91.webp";
import Error from "../../ui/error/error";
import i91911 from "../../../images/PART 2/i91 91.1.webp";
import i91912 from "../../../images/PART 2/i91 91.2.webp";
import i91913 from "../../../images/PART 2/i91 91.3.webp";

const I91 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i92");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i91} width="640px" height="542px" alt="i91" />
          <div // Ошибка 91.1
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "100px",
              left: "calc(50% - 315px)",
              width: "420px",
              height: "63px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 91.2
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "180px",
              left: "calc(50% - 317px)",
              width: "420px",
              height: "63px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div // Ошибка 91.3
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "257px",
              left: "calc(50% - 315px)",
              width: "370px",
              height: "63px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
          <div // Правильный
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "340px",
              left: "calc(50% - 315px)",
              width: "350px",
              height: "120px",
            }}
            onClick={nextPage}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 91.1
          loaded="true"
          image={i91911}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h91o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 91.2
          loaded="true"
          image={i91912}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h91o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 91.3
          loaded="true"
          image={i91913}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h91o3");
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

export default I91;
