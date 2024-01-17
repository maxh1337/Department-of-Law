import CriminalCase from "../../ui/criminal-case/criminal-case";
import i20 from "../../../images/PART 2/i20.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Error from "../../ui/error/error";
import i20201 from "../../../images/PART 2/i20 20.1.webp";
import { doc20 } from "../../ui/allFiles2";

const I20 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc20];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/i21");
  };
  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i20} width="640px" height="542px" alt="i20" />
          <div
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "157px",
              left: "calc(50% - 285px)",
              width: "290px",
              height: "360px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 20.1
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "157px",
              left: "calc(50% - -14px)",
              width: "290px",
              height: "360px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
        </>
      ) : (
        <Error // 20.1
          loaded="true"
          image={i20201}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h20");
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

export default I20;
