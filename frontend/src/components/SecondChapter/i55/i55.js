import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i55 from "../../../images/PART 2/i55.webp";
import Error from "../../ui/error/error";
import i55551 from "../../../images/PART 2/i55 55.1.webp";
import i55552 from "../../../images/PART 2/i55 55.2.webp";

const I55 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i56");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i55} width="640px" height="542px" alt="i55" />
          <div // Ошибка 55.1
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "112px",
              left: "calc(50% - 310px)",
              width: "410px",
              height: "110px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 55.2
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "240px",
              left: "calc(50% - 295px)",
              width: "300px",
              height: "120px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "372px",
              left: "calc(50% - 320px)",
              width: "450px",
              height: "150px",
            }}
            onClick={nextPage}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 55.1
          loaded="true"
          image={i55551}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h55o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 55.2
          loaded="true"
          image={i55552}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h55o2");
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

export default I55;
