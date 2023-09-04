import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i95 from "../../../images/PART 2/i95.webp";
import Error from "../../ui/error/error";
import i95951 from "../../../images/PART 2/i95 95.1.webp";
import i95952 from "../../../images/PART 2/i95 95.2.webp";
import i95953 from "../../../images/PART 2/i95 95.3.webp";

const I95 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i96");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i95} width="640px" height="542px" alt="i95" />
          <div // Правильный вариант
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "131px",
              left: "calc(50% - 310px)",
              width: "390px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 95.1
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "220px",
              left: "calc(50% - 90px)",
              width: "360px",
              height: "70px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 95.2
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "300px",
              left: "calc(50% - 290px)",
              width: "370px",
              height: "65px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div // Ошибка 95.3
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "380px",
              left: "calc(50% - 90px)",
              width: "390px",
              height: "70px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 95.1
          loaded="true"
          image={i95951}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h95o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 95.2
          loaded="true"
          image={i95952} // Тут должно будет быть i331
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h95o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 95.3
          loaded="true"
          image={i95953}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h95o1");
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

export default I95;
