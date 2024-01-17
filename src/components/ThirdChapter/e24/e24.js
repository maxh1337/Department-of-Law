import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e24 from "../../../images/PART 3/e24.webp";
import Error from "../../ui/error/error";
import e from "../../../images/PART 3/E example clean.png";
import e24241 from "../../../images/PART 3/e24 24.1.webp";
import e24242 from "../../../images/PART 3/e24 24.2.webp";
import e24243 from "../../../images/PART 3/e24 24.3.jpg";

const E24 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);

  const nextPage = () => {
    navigate("/e25");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e24} width="640px" height="542px" alt="e21" />
          <div // Ошибка 21.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "165px",
              left: "calc(50% - 298px)",
              width: "220px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 21.2
            className="button-cloud"
            style={{
              position: "absolute",
              top: "165px",
              left: "calc(50% + 60px)",
              width: "230px",
              height: "80px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 21.3
            className="button-cloud"
            style={{
              position: "absolute",
              top: "280px",
              left: "calc(50% + 60px)",
              width: "220px",
              height: "70px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "280px",
              left: "calc(50% -  298px)",
              width: "220px",
              height: "74px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 24.1
          loaded="true"
          image={e24241}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he24o1");
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
          image={e24242}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he24o2");
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
          image={e24243}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he24o3");
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

export default E24;
