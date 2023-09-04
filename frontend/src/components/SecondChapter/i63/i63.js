import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i63 from "../../../images/PART 2/i63.webp";
import Error from "../../ui/error/error";
import i63631 from "../../../images/PART 2/i63 63.1.webp";
import i63632 from "../../../images/PART 2/i63 63.2.webp";
import i63633 from "../../../images/PART 2/i63 63.3.webp";
import i63634 from "../../../images/PART 2/i63 63.4.webp";

const I63 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i64");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i63} width="640px" height="542px" alt="i63" />
          <div // Ошибка 63.1
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "108px",
              left: "calc(50% - 290px)",
              width: "500px",
              height: "68px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 63.2
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "200px",
              left: "calc(50% - 290px)",
              width: "540px",
              height: "55px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "280px",
              left: "calc(50% - 290px)",
              width: "500px",
              height: "55px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 63.3
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "370px",
              left: "calc(50% - 290px)",
              width: "540px",
              height: "55px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
          <div // Ошибка 63.4
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "450px",
              left: "calc(50% - 290px)",
              width: "540px",
              height: "68px",
            }}
            onClick={() => {
              setError(4);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 63.1
          loaded="true"
          image={i63631}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h63o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 63.2
          loaded="true"
          image={i63632}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h63o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 3 ? (
        <Error // 63.3
          loaded="true"
          image={i63633}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h63o3");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 63.4
          loaded="true"
          image={i63634}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h63o4");
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

export default I63;
