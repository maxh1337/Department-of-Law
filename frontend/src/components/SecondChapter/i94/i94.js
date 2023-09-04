import CriminalCase from "../../ui/criminal-case/criminal-case";
import i94 from "../../../images/PART 2/i94.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Error from "../../ui/error/error";
import i94941 from "../../../images/PART 2/i94 94.1.webp";

const I94 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const [button1, button1SetActive] = useState(0);
  const [button2, button2SetActive] = useState(0);
  const [button3, button3SetActive] = useState(0);

  const nextPage = () => {
    if (button1 === 1 && button2 === 1 && button3 === 1) {
      navigate("/i95");
    } else {
      setError(1);
    }
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i94} width="640px" height="542px" alt="i94" />
          <div // Правильный вариант
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "196px",
              left: "calc(50% - 246px)",
              width: "455px",
              height: "60px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "266px",
              left: "calc(50% - 246px)",
              width: "455px",
              height: "45px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div
            className={
              `${button1}` >= 1
                ? `buttonToChoose1 buttonToChoose1Active`
                : `buttonToChoose1`
            }
            style={{
              position: "absolute",
              top: "316px",
              left: "calc(50% - 246px)",
              width: "455px",
              height: "25px",
            }}
            onClick={() => {
              button1SetActive(1);
            }}
          ></div>
          <div
            className={
              `${button2}` >= 1
                ? `buttonToChoose1 buttonToChoose1Active`
                : `buttonToChoose1`
            }
            style={{
              position: "absolute",
              top: "346px",
              left: "calc(50% - 246px)",
              width: "455px",
              height: "62px",
            }}
            onClick={() => {
              button2SetActive(1);
            }}
          ></div>
          <div
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "421px",
              left: "calc(50% - 246px)",
              width: "455px",
              height: "22px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div
            className={
              `${button3}` >= 1
                ? `buttonToChoose1 buttonToChoose1Active`
                : `buttonToChoose1`
            }
            style={{
              position: "absolute",
              top: "459px",
              left: "calc(50% - 246px)",
              width: "455px",
              height: "22px",
            }}
            onClick={() => {
              button3SetActive(1);
            }}
          ></div>
          <div
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "492px",
              left: "calc(50% - 246px)",
              width: "455px",
              height: "32px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div className="Buttons">
            <button className="linkButton" onClick={nextPage}>
              Проверить
            </button>
          </div>
        </>
      ) : (
        <Error // 94.1
          loaded="true"
          image={i94941}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h94");
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

export default I94;
