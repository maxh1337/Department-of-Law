import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i84 from "../../../images/PART 2/i84.webp";
import Error from "../../ui/error/error";
import i84841 from "../../../images/PART 2/i84 84.1.webp";
import i84842 from "../../../images/PART 2/i84 84.2.webp";
import i84843 from "../../../images/PART 2/i84 84.3.webp";

const I84 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i85");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i84} width="640px" height="542px" alt="i84" />
          <div // Ошибка 84.1
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "280px",
              left: "calc(50% - 310px)",
              width: "295px",
              height: "60px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 84.2
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "283px",
              left: "calc(50% - -20px)",
              width: "290px",
              height: "60px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "410px",
              left: "calc(50% - 300px)",
              width: "311px",
              height: "60px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 84.3
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "380px",
              left: "calc(50% - -53px)",
              width: "250px",
              height: "120px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 84.1
          loaded="true"
          image={i84841}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h84o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 84.2
          loaded="true"
          image={i84842} // Тут должно будет быть i331
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h84o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 84.3
          loaded="true"
          image={i84843}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h84o3");
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

export default I84;
