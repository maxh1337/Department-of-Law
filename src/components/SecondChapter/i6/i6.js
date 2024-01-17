import i6 from "../../../images/PART 2/i6.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import Error from "../../ui/error/error";
import i661 from "../../../images/PART 2/i6 6.1.webp";
import i662 from "../../../images/PART 2/i6 6.2.webp";
import i663 from "../../../images/PART 2/i6 6.3.webp";

const I6 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i7");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i6} width="640px" height="542px" alt="i6" />
          <div // Ошибка 6.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "144px",
              left: "calc(50% - 295px)",
              width: "216px",
              height: "70px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "155px",
              left: "calc(50% - 40px)",
              width: "200px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 6.2
            className="button-cloud"
            style={{
              position: "absolute",
              top: "240px",
              left: "calc(50% + 100px)",
              width: "200px",
              height: "70px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div // Ошибка 6.3
            className="button-cloud"
            style={{
              position: "absolute",
              top: "238px",
              left: "calc(50% - 185px)",
              width: "216px",
              height: "70px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 6.1
          loaded="true"
          image={i661}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h6o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 6.2
          loaded="true"
          image={i662} // Тут должно будет быть i331
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h6o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 6.3
          loaded="true"
          image={i663}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h6o3");
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

export default I6;
