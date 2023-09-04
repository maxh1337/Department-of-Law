import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i39 from "../../../images/PART 2/i39.webp";
import Error from "../../ui/error/error";
import i39391 from "../../../images/PART 2/i39 39.1.webp";
import i39392 from "../../../images/PART 2/i39 39.2.webp";
import i39393 from "../../../images/PART 2/i39 39.3.webp";

const I39 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i40");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i39} width="640px" height="542px" alt="i39" />
          <div // Ошибка 39.1
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "125px",
              left: "calc(50% - 290px)",
              width: "320px",
              height: "55px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "210px",
              left: "calc(50% - 317px)",
              width: "368px",
              height: "115px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 39.2
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "340px",
              left: "calc(50% - 299px)",
              width: "330px",
              height: "70px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div // Ошибка 39.2
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "429px",
              left: "calc(50% - 306px)",
              width: "370px",
              height: "70px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 39.1
          loaded="true"
          image={i39391}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h39");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 39.2
          loaded="true"
          image={i39392}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h39");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 35.3
          loaded="true"
          image={i39393}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h39");
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

export default I39;
