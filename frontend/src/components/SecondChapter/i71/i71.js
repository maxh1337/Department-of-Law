import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Criminal from "../../ui/criminal-case/criminal-case";
import Error from "../../ui/error/error";
import i71711 from "../../../images/PART 2/i71 71.1.webp";
import i71 from "../../../images/PART 2/i71.webp";

const I71 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const [showButtonState, setShowButtonState] = useState(0);
  const [frst, setFrst] = useState(0);
  const [scnd, setScnd] = useState(0);

  const nextPage = () => {
    navigate("/i72");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <Criminal />
          <img width="640px" height="542px" src={i71} alt="i71" />
          <div className="Buttons">
            <button // Кросовки
              data-to-page="p29г"
              onClick={(e) => {
                setFrst(1);
                setShowButtonState(showButtonState + 1);
              }}
              className={`${frst}` >= 1 ? `hover hover_active` : `hover`}
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                top: 290,
                left: "calc(50% - 90px)",
                width: 70,
                height: 70,
                color: "white",
              }}
            ></button>
            <button // Футболка
              data-to-page="p29а"
              onClick={(e) => {
                setError(1);
              }}
              className="hover"
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                top: 360,
                left: "calc(50% - 320px)",
                width: 80,
                height: 110,
                color: "white",
              }}
            ></button>
            <button // Рубашка
              data-to-page="p29д"
              onClick={(e) => {
                setScnd(1);
                setShowButtonState(showButtonState + 1);
              }}
              className={`${scnd}` >= 1 ? `hover hover_active` : `hover`}
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                top: 440,
                left: "calc(50% - 260px)",
                width: 100,
                height: 100,
                color: "white",
              }}
            ></button>
            <button // Ботинки
              data-to-page="p29в"
              onClick={(e) => {
                setError(1);
              }}
              className="hover"
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                top: 310,
                left: "calc(50% - -105px)",
                width: 70,
                height: 70,
                color: "white",
              }}
            ></button>
            <button // Комнатные тапочки
              data-to-page="p29б"
              onClick={(e) => {
                setError(1);
              }}
              className="hover"
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                top: 460,
                left: "calc(50% - -240px)",
                width: 80,
                height: 80,
                color: "white",
              }}
            ></button>
            <button // Кофта на молнии
              data-to-page="p29б"
              onClick={(e) => {
                setError(1);
              }}
              className="hover"
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                top: 140,
                left: "calc(50% - -240px)",
                width: 60,
                height: 120,
                color: "white",
              }}
            ></button>
            <button // Кофта на молнии
              data-to-page="p29б"
              onClick={(e) => {
                setError(1);
              }}
              className="hover"
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                top: 230,
                left: "calc(50% - -200px)",
                width: 60,
                height: 60,
                color: "white",
              }}
            ></button>
            {frst === 1 && scnd === 1 ? (
              <button onClick={nextPage}>Дальше</button>
            ) : null}
          </div>
          ;
        </>
      ) : (
        <Error // 71.1
          loaded="true"
          image={i71711}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h71");
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

export default I71;
