import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i59 from "../../../images/PART 2/i59.webp";
import Error from "../../ui/error/error";
import i59591 from "../../../images/PART 2/i59 59.1.webp";
import i59592 from "../../../images/PART 2/i59 59.2.webp";
import i59593 from "../../../images/PART 2/i59 59.3.webp";
import { doc59 } from "../../ui/allFiles2";

const I59 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc59];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/i60");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i59} width="640px" height="542px" alt="i59" />
          <div // Ошибка 59.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "150px",
              left: "calc(50% - 250px)",
              width: "225px",
              height: "70px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Правильный вариант
            className="button-cloud"
            style={{
              position: "absolute",
              top: "150px",
              left: "calc(50% - -90px)",
              width: "216px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 59.2
            className="button-cloud"
            style={{
              position: "absolute",
              top: "245px",
              left: "calc(50% - 310px)",
              width: "216px",
              height: "70px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div // Ошибка 59.3
            className="button-cloud"
            style={{
              position: "absolute",
              top: "245px",
              left: "calc(50% - -70px)",
              width: "260px",
              height: "70px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 59.1
          loaded="true"
          image={i59591}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h59o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 59.2
          loaded="true"
          image={i59592} // Тут должно будет быть i331
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h59o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 59.3
          loaded="true"
          image={i59593}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h59o2");
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

export default I59;
