import CriminalCase from "../../ui/criminal-case/criminal-case";
import e11 from "../../../images/PART 3/e11.webp";
import Error from "../../ui/error/error";
import e11111 from "../../../images/PART 3/e11 11.1.webp";
import e11112 from "../../../images/PART 3/e11 11.2.webp";
import e11113 from "../../../images/PART 3/e11 11.3.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const E11 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);

  const nextPage = () => {
    navigate("/e12");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e11} width="640px" height="542px" alt="e11" />
          <div // Ошибка 11.1 Прокурор
            className="button-cloud"
            style={{
              position: "absolute",
              top: "122px",
              left: "calc(50% - 313px)",
              width: "264px",
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
              top: "222px",
              left: "calc(50% - 311px)",
              width: "267px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 11.2 Прокурор
            className="button-cloud"
            style={{
              position: "absolute",
              top: "322px",
              left: "calc(50% - 313px)",
              width: "300px",
              height: "110px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div // Ошибка 11.3 Прокурор
            className="button-cloud"
            style={{
              position: "absolute",
              top: "450px",
              left: "calc(50% - 313px)",
              width: "300px",
              height: "87px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 11.1
          loaded="true"
          image={e11111}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he11o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 11.2
          loaded="true"
          image={e11112}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he11o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 11.3
          loaded="true"
          image={e11113}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he11o3");
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

export default E11;
