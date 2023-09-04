import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i17 from "../../../images/PART 2/i17.webp";
import Error from "../../ui/error/error";
import i17171 from "../../../images/PART 2/i17 17.1.webp";
import i17172 from "../../../images/PART 2/i17 17.2.webp";
import i17173 from "../../../images/PART 2/i17 17.3.webp";

const I17 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i18");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i17} width="640px" height="542px" alt="i12" />
          <div // Ошибка 17.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "144px",
              left: "calc(50% - 295px)",
              width: "320px",
              height: "70px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Правильный вариант
            className="button-cloud"
            style={{
              position: "absolute",
              top: "146px",
              left: "calc(50% - -48px)",
              width: "216px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 17.2
            className="button-cloud"
            style={{
              position: "absolute",
              top: "240px",
              left: "calc(50% - 280px)",
              width: "216px",
              height: "70px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div // Ошибка 17.3
            className="button-cloud"
            style={{
              position: "absolute",
              top: "238px",
              left: "calc(50% - -30px)",
              width: "260px",
              height: "100px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 17.1
          loaded="true"
          image={i17171}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h17o1");
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
          image={i17172} // Тут должно будет быть i331
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h17o2");
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
          image={i17173}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h17o3");
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

export default I17;
