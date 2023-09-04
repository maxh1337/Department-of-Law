import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i60 from "../../../images/PART 2/i60.webp";
import Error from "../../ui/error/error";
import i60601 from "../../../images/PART 2/i60 60.1.webp";
import i60602 from "../../../images/PART 2/i60 60.2.webp";
import { doc60 } from "../../ui/allFiles2";

const I60 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc60];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/i61");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i60} width="640px" height="542px" alt="i60" />
          <div // Ошибка 60.1
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "139px",
              left: "calc(50% - 290px)",
              width: "470px",
              height: "55px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "240px",
              left: "calc(50% - 290px)",
              width: "470px",
              height: "55px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 60.2
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "340px",
              left: "calc(50% - 290px)",
              width: "530px",
              height: "55px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 60.1
          loaded="true"
          image={i60601}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h60o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 60.2
          loaded="true"
          image={i60602}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h60o2");
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

export default I60;
