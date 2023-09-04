import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i64 from "../../../images/PART 2/i64.webp";
import Error from "../../ui/error/error";
import i64641 from "../../../images/PART 2/i64 64.1.webp";
import i64642 from "../../../images/PART 2/i64 64.2.webp";
import { doc64 } from "../../ui/allFiles2";

const I64 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc64];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/i65");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i64} width="640px" height="542px" alt="i64" />
          <div // Ошибка 64.1
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "100px",
              left: "calc(50% - 315px)",
              width: "350px",
              height: "68px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 64.2
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "180px",
              left: "calc(50% - 317px)",
              width: "350px",
              height: "130px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div // Ошибка 64.2
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "320px",
              left: "calc(50% - 315px)",
              width: "350px",
              height: "110px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div // Правильный
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "440px",
              left: "calc(50% - 315px)",
              width: "350px",
              height: "85px",
            }}
            onClick={nextPage}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 64.1
          loaded="true"
          image={i64641}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h64o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 64.3
          loaded="true"
          image={i64642}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h64o2");
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

export default I64;
