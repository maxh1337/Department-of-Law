import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i51 from "../../../images/PART 2/i51.webp";
import Error from "../../ui/error/error";
import i51511 from "../../../images/PART 2/i51 51.1.webp";

const I51 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i52");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i51} width="640px" height="542px" alt="i51" />
          <div // Ошибка 51.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "83px",
              left: "calc(50% - 260px)",
              width: "300px",
              height: "80px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Правильный ответ
            className="button-cloud"
            style={{
              position: "absolute",
              top: "202px",
              left: "calc(50% - -10px)",
              width: "300px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
        </>
      ) : (
        <Error // 51.1
          loaded="true"
          image={i51511}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h51");
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

export default I51;
