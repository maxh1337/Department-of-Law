import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i27 from "../../../images/PART 2/i27.webp";
import Error from "../../ui/error/error";
import i27271 from "../../../images/PART 2/i27 27.1.webp";
import i27272 from "../../../images/PART 2/i27 27.2.webp";
import i27273 from "../../../images/PART 2/i27 27.3.webp";
import { useState } from "react";

const I27 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i28");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i27} width="640px" height="542px" alt="i27" />
          <div // Правильный вариант
            className="button-cloud"
            style={{
              position: "absolute",
              top: "144px",
              left: "calc(50% - 253px)",
              width: "225px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 27.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "146px",
              left: "calc(50% - -40px)",
              width: "216px",
              height: "70px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 27.2
            className="button-cloud"
            style={{
              position: "absolute",
              top: "255px",
              left: "calc(50% - 264px)",
              width: "216px",
              height: "70px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div // Ошибка 27.3
            className="button-cloud"
            style={{
              position: "absolute",
              top: "355px",
              left: "calc(50% - 250px)",
              width: "260px",
              height: "100px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 27.1
          loaded="true"
          image={i27271}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h27");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 27.2
          loaded="true"
          image={i27272} // Тут должно будет быть i331
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h27");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 27.3
          loaded="true"
          image={i27273}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h27");
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

export default I27;
