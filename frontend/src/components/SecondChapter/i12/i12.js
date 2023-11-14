import i12 from "../../../images/PART 2/i12.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import Error from "../../ui/error/error";
import i12121 from "../../../images/PART 2/i12 12.1.webp";
import i12122 from "../../../images/PART 2/i12 12.2.webp";
import i12123 from "../../../images/PART 2/i12 12.3.webp";

const I12 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i13");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i12} width="640px" height="542px" alt="i12" />
          <div // Ошибка 12.1
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
          <div // Ошибка 12.3
            className="button-cloud"
            style={{
              position: "absolute",
              top: "155px",
              left: "calc(50% - 40px)",
              width: "320px",
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
              top: "240px",
              left: "calc(50% - 40px)",
              width: "320px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 12.2
            className="button-cloud"
            style={{
              position: "absolute",
              top: "238px",
              left: "calc(50% - 295px)",
              width: "216px",
              height: "70px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 12.1
          loaded="true"
          image={i12121}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h12o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 12.2
          loaded="true"
          image={i12122} // Тут должно будет быть i331
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h12o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 12.3
          loaded="true"
          image={i12123}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h12o3");
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

export default I12;
