import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i49 from "../../../images/PART 2/i49.webp";
import Error from "../../ui/error/error";
import i49491 from "../../../images/PART 2/i49 49.1.webp";
import i49492 from "../../../images/PART 2/i49 49.2.webp";
import i49493 from "../../../images/PART 2/i49 49.3.webp";
import { useState } from "react";
import { doc49 } from "../../ui/allFiles2";

const I49 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc49];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/i50");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i49} width="640px" height="542px" alt="i49" />
          <div // Ошибка 49.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "144px",
              left: "calc(50% - 290px)",
              width: "225px",
              height: "70px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 49.2
            className="button-cloud"
            style={{
              position: "absolute",
              top: "146px",
              left: "calc(50% - -90px)",
              width: "216px",
              height: "70px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div // Правильный вариант
            className="button-cloud"
            style={{
              position: "absolute",
              top: "228px",
              left: "calc(50% - 290px)",
              width: "216px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 49.3
            className="button-cloud"
            style={{
              position: "absolute",
              top: "238px",
              left: "calc(50% - -90px)",
              width: "260px",
              height: "70px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 49.1
          loaded="true"
          image={i49491}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h49o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 49.2
          loaded="true"
          image={i49492} // Тут должно будет быть i331
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h49o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 49.3
          loaded="true"
          image={i49493}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h49o2");
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

export default I49;
