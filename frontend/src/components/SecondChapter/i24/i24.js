import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i24 from "../../../images/PART 2/i24.webp";
import Error from "../../ui/error/error";
import i24241 from "../../../images/PART 2/i24 24.1.webp";
import i24242 from "../../../images/PART 2/i24 24.2.webp";
import i24243 from "../../../images/PART 2/i24 24.3.webp";

const I24 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i25");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i24} width="640px" height="542px" alt="i24" />
          <div // Правильный вариант
            className="button-cloud"
            style={{
              position: "absolute",
              top: "205px",
              left: "calc(50% - 224px)",
              width: "225px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 22.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "205px",
              left: "calc(50% - -10px)",
              width: "216px",
              height: "70px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 22.2
            className="button-cloud"
            style={{
              position: "absolute",
              top: "305px",
              left: "calc(50% - 222px)",
              width: "216px",
              height: "70px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div // Ошибка 22.3
            className="button-cloud"
            style={{
              position: "absolute",
              top: "305px",
              left: "calc(50% - -10px)",
              width: "260px",
              height: "70px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 24.1
          loaded="true"
          image={i24241}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h24o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 24.2
          loaded="true"
          image={i24242} // Тут должно будет быть i331
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h24o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 24.3
          loaded="true"
          image={i24243}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h24o3");
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

export default I24;
