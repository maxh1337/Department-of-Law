import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i77 from "../../../images/PART 2/i77.webp";
import Error from "../../ui/error/error";
import i77771 from "../../../images/PART 2/i77 77.1.webp";
import i77772 from "../../../images/PART 2/i77 77.2.webp";
import i77773 from "../../../images/PART 2/i77 77.3.webp";

const I77 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i78");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i77} width="640px" height="542px" alt="i77" />
          <div // Правильный вариант
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "160px",
              left: "calc(50% - 310px)",
              width: "225px",
              height: "120px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 77.1
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "163px",
              left: "calc(50% - -20px)",
              width: "276px",
              height: "130px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div // Ошибка 77.2
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "300px",
              left: "calc(50% - 300px)",
              width: "216px",
              height: "90px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 77.3
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "300px",
              left: "calc(50% - -70px)",
              width: "240px",
              height: "90px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 77.1
          loaded="true"
          image={i77771}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h77o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 77.2
          loaded="true"
          image={i77772} // Тут должно будет быть i331
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h77o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 77.3
          loaded="true"
          image={i77773}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h77o3");
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

export default I77;
