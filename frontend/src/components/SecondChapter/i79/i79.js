import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i79 from "../../../images/PART 2/i79.webp";
import Error from "../../ui/error/error";
import i79791 from "../../../images/PART 2/i79 79.1.webp";
import { doc79 } from "../../ui/allFiles2";

const I79 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const [button1, button1SetActive] = useState(0);
  const [button2, button2SetActive] = useState(0);
  const [button3, button3SetActive] = useState(0);
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc79];
  const nextPage = () => {
    if (button1 === 1 && button2 === 1 && button3 === 1) {
      localStorage.setItem("documents", JSON.stringify(newDocuments));
      navigate("/i80");
    } else {
      setError(1);
    }
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i79} width="640px" height="542px" alt="i79" />
          <div // Правильный вариант
            className={
              `${button1}` >= 1
                ? `buttonToChoose1 buttonToChoose1Active`
                : `buttonToChoose1`
            }
            style={{
              position: "absolute",
              top: "136px",
              left: "calc(50% - 306px)",
              width: "385px",
              height: "100px",
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
              top: "263px",
              left: "calc(50% - 300px)",
              width: "415px",
              height: "103px",
            }}
            onClick={() => {
              button2SetActive(1);
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
              top: "400px",
              left: "calc(50% - 300px)",
              width: "270px",
              height: "100px",
            }}
            onClick={() => {
              button3SetActive(1);
            }}
          ></div>
          <div // Ошибка 77.1
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "400px",
              left: "calc(50% - 0px)",
              width: "295px",
              height: "100px",
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
        <Error // 79.1
          loaded="true"
          image={i79791}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h79");
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

export default I79;
