import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i66 from "../../../images/PART 2/i66.webp";
import Error from "../../ui/error/error";
import i66661 from "../../../images/PART 2/i66 66.1.webp";
import i66662 from "../../../images/PART 2/i66 66.2.webp";
import i66663 from "../../../images/PART 2/i66 66.3.webp";

const I66 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i67");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i66} width="640px" height="542px" alt="i66" />
          <div // Правильный вариант
            className="button-cloud"
            style={{
              position: "absolute",
              top: "150px",
              left: "calc(50% - 310px)",
              width: "225px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 66.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "153px",
              left: "calc(50% - -60px)",
              width: "216px",
              height: "70px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div // Ошибка 66.2
            className="button-cloud"
            style={{
              position: "absolute",
              top: "230px",
              left: "calc(50% - 280px)",
              width: "216px",
              height: "70px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 66.3
            className="button-cloud"
            style={{
              position: "absolute",
              top: "245px",
              left: "calc(50% - -70px)",
              width: "260px",
              height: "70px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 66.1
          loaded="true"
          image={i66661}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h66o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 66.2
          loaded="true"
          image={i66662} // Тут должно будет быть i331
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h66o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 66.3
          loaded="true"
          image={i66663}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h66o2");
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

export default I66;
