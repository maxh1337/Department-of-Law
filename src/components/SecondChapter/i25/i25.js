import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i25 from "../../../images/PART 2/i25.webp";
import Error from "../../ui/error/error";
import i25251 from "../../../images/PART 2/i25 25.1.webp";
import i25252 from "../../../images/PART 2/i25 25.2.webp";
import i25253 from "../../../images/PART 2/i25 25.3.webp";
import { useState } from "react";

const I25 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i26");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i25} width="640px" height="542px" alt="i25" />
          <div // Правильный вариант
            className="button-cloud"
            style={{
              position: "absolute",
              top: "104px",
              left: "calc(50% - 290px)",
              width: "430px",
              height: "80px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 25.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "210px",
              left: "calc(50% - 300px)",
              width: "355px",
              height: "75px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 25.2
            className="button-cloud"
            style={{
              position: "absolute",
              top: "300px",
              left: "calc(50% - 290px)",
              width: "380px",
              height: "70px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div // Ошибка 25.3
            className="button-cloud"
            style={{
              position: "absolute",
              top: "397px",
              left: "calc(50% - 294px)",
              width: "380px",
              height: "70px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 25.1
          loaded="true"
          image={i25251}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h25o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 25.2
          loaded="true"
          image={i25252}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h25o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 25.3
          loaded="true"
          image={i25253}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h25o3");
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

export default I25;
