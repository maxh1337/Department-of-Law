import CriminalCase from "../../ui/criminal-case/criminal-case";
import i19 from "../../../images/PART 2/i19.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import i17 from "../../../images/PART 2/i17.webp";
import Error from "../../ui/error/error";
import i19191 from "../../../images/PART 2/i19 19.1.webp";
import i19192 from "../../../images/PART 2/i19 19.2.webp";
import i19193 from "../../../images/PART 2/i19 19.3.webp";

const I19 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i20");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i19} width="640px" height="542px" alt="i19" />
          <div // Правильный вариант
            className="button-cloud"
            style={{
              position: "absolute",
              top: "104px",
              left: "calc(50% - 260px)",
              width: "430px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 19.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "195px",
              left: "calc(50% - 300px)",
              width: "355px",
              height: "75px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 19.2
            className="button-cloud"
            style={{
              position: "absolute",
              top: "291px",
              left: "calc(50% - 280px)",
              width: "216px",
              height: "70px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div // Ошибка 19.3
            className="button-cloud"
            style={{
              position: "absolute",
              top: "365px",
              left: "calc(50% - 193px)",
              width: "230px",
              height: "70px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 17.1
          loaded="true"
          image={i19191}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h19");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 17.2
          loaded="true"
          image={i19192} // Тут должно будет быть i331
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h19");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 17.3
          loaded="true"
          image={i19193}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h19");
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

export default I19;
