import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i29 from "../../../images/PART 2/i29.webp";
import Error from "../../ui/error/error";
import i29291 from "../../../images/PART 2/i29 29.1.webp";
import i29292 from "../../../images/PART 2/i29 29.2.webp";
import { useState } from "react";

const I29 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i30");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i29} width="640px" height="542px" alt="i29" />
          <div // Ошибка 29.1
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "2px",
              left: "calc(50% - 318px)",
              width: "262px",
              height: "130px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "180px",
              left: "calc(50% - 317px)",
              width: "230px",
              height: "150px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 29.2
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "359px",
              left: "calc(50% - 315px)",
              width: "230px",
              height: "150px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 29.1
          loaded="true"
          image={i29291}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h29o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 29.2
          loaded="true"
          image={i29292}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h29o2");
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

export default I29;
