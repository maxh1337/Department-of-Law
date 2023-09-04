import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i53 from "../../../images/PART 2/i53.webp";
import Error from "../../ui/error/error";
import i53531 from "../../../images/PART 2/i53 53.1.webp";
import i53532 from "../../../images/PART 2/i53 53.2.webp";
import i53533 from "../../../images/PART 2/i53 53.3.webp";

const I53 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i54");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i53} width="640px" height="542px" alt="i53" />
          <div // Правильный вариант
            className="button-cloud"
            style={{
              position: "absolute",
              top: "165px",
              left: "calc(50% - 290px)",
              width: "300px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 53.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "220px",
              left: "calc(50% - -50px)",
              width: "250px",
              height: "70px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 53.2
            className="button-cloud"
            style={{
              position: "absolute",
              top: "310px",
              left: "calc(50% - 290px)",
              width: "216px",
              height: "70px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div // Ошибка 53.3
            className="button-cloud"
            style={{
              position: "absolute",
              top: "380px",
              left: "calc(50% - -50px)",
              width: "260px",
              height: "70px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 53.1
          loaded="true"
          image={i53531}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h53o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 53.2
          loaded="true"
          image={i53532} // Тут должно будет быть i331
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h53o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 53.3
          loaded="true"
          image={i53533}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h53o2");
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

export default I53;
