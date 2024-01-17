import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i81 from "../../../images/PART 2/i81.webp";
import Error from "../../ui/error/error";
import i81811 from "../../../images/PART 2/i81 81.1.webp";
import i81812 from "../../../images/PART 2/i81 81.2.webp";
import i81813 from "../../../images/PART 2/i81 81.3.webp";

const I81 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i82"); // Возможно нужно удалять сохранение неправильного пути
  };

  const navigateToWrong = () => {
    localStorage.setItem("chapter2WrongWay81", JSON.stringify(1));
    navigate("/i90.js");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i81} width="640px" height="542px" alt="i81" />
          <div // Вариант неправильный перекинуть на 90 Один из 2 ложных путей
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "100px",
              left: "calc(50% - 310px)",
              width: "280px",
              height: "60px",
            }}
            onClick={navigateToWrong}
          ></div>
          <div // Ошибка 81.1
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "185px",
              left: "calc(50% - 310px)",
              width: "240px",
              height: "60px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 81.2
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "275px",
              left: "calc(50% - 310px)",
              width: "210px",
              height: "64px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div // Ошибка 81.3
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "365px",
              left: "calc(50% - 310px)",
              width: "210px",
              height: "64px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
          <div // Ошибка 81.3
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "455px",
              left: "calc(50% - 310px)",
              width: "321px",
              height: "64px",
            }}
            onClick={nextPage}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 81.1
          loaded="true"
          image={i81811}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h81o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 81.2
          loaded="true"
          image={i81812} // Тут должно будет быть i331
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h81o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 81.3
          loaded="true"
          image={i81813}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h81o3");
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

export default I81;
