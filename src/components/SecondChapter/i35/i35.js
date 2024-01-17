import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i35 from "../../../images/PART 2/i35.webp";
import Error from "../../ui/error/error";
import i35351 from "../../../images/PART 2/i35 35.1.webp";
import i35352 from "../../../images/PART 2/i35 35.2.webp";
import i35353 from "../../../images/PART 2/i35 35.3.webp";

const I35 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i36");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i35} width="640px" height="542px" alt="i35" />
          <div // Ошибка 35.1
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "145px",
              left: "calc(50% - 294px)",
              width: "262px",
              height: "55px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 35.2
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "240px",
              left: "calc(50% - 299px)",
              width: "330px",
              height: "70px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "340px",
              left: "calc(50% - 299px)",
              width: "330px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 35.2
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "420px",
              left: "calc(50% - 301px)",
              width: "330px",
              height: "70px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 35.1
          loaded="true"
          image={i35351}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h35o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 35.2
          loaded="true"
          image={i35352}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h35o2");
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
          image={i35353}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h35o3");
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

export default I35;
