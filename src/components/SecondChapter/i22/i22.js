import CriminalCase from "../../ui/criminal-case/criminal-case";
import i22 from "../../../images/PART 2/i22.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Error from "../../ui/error/error";
import i22221 from "../../../images/PART 2/i22 22.1.webp";
import i22222 from "../../../images/PART 2/i22 22.2.webp";
import i22223 from "../../../images/PART 2/i22 22.3.webp";

const I22 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i23");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i22} width="640px" height="542px" alt="i22" />
          <div // Ошибка 22.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "144px",
              left: "calc(50% - 234px)",
              width: "225px",
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
              left: "calc(50% - -10px)",
              width: "216px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 22.2
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
          <div // Ошибка 22.3
            className="button-cloud"
            style={{
              position: "absolute",
              top: "238px",
              left: "calc(50% - -30px)",
              width: "260px",
              height: "70px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 22.1
          loaded="true"
          image={i22221}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h22o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 22.2
          loaded="true"
          image={i22222} // Тут должно будет быть i331
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h22o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 22.3
          loaded="true"
          image={i22223}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h22o3");
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

export default I22;
