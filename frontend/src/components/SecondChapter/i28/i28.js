import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i28 from "../../../images/PART 2/i28.webp";
import Error from "../../ui/error/error";
import i28281 from "../../../images/PART 2/i28 28.1.webp";
import i28282 from "../../../images/PART 2/i28 28.2.webp";
import { useState } from "react";

const I28 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i29");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i28} width="640px" height="542px" alt="i28" />
          <div // Ошибка 28.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "145px",
              left: "calc(50% - 298px)",
              width: "225px",
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
              top: "132px",
              left: "calc(50% - -50px)",
              width: "216px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 28.2
            className="button-cloud"
            style={{
              position: "absolute",
              top: "251px",
              left: "calc(50% - 295px)",
              width: "216px",
              height: "70px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "359px",
              left: "calc(50% - 278px)",
              width: "260px",
              height: "100px",
            }}
            onClick={nextPage}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 28.1
          loaded="true"
          image={i28281}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h28o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 28.2
          loaded="true"
          image={i28282}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h28o2");
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

export default I28;
