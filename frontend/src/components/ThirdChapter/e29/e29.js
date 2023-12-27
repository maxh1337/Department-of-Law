import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e29 from "../../../images/PART 3/e29.webp";
import Error from "../../ui/error/error";
import e29291 from "../../../images/PART 3/e29 29.1.webp";
import e29292 from "../../../images/PART 3/e29 29.2.webp";
import e29293 from "../../../images/PART 3/e29 29.3.webp";
import e29294 from "../../../images/PART 3/e29 29.4.webp";
import { doc29 } from "../../ui/allFiles3";

const E29 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc29];
  const nextPage = () => {
    localStorage.setItem("documents", JSON.stringify(newDocuments));
    navigate("/e30");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e29} width="640px" height="542px" alt="e29" />
          <div // Ошибка 21.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "175px",
              left: "calc(50% - 310px)",
              width: "300px",
              height: "70px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 21.2
            className="button-cloud"
            style={{
              position: "absolute",
              top: "165px",
              left: "calc(50% + 10px)",
              width: "300px",
              height: "80px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "280px",
              left: "calc(50% + 10px)",
              width: "300px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "393px",
              left: "calc(50% + 10px)",
              width: "300px",
              height: "80px",
            }}
            onClick={() => {
              setError(4);
            }}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "290px",
              left: "calc(50% -  310px)",
              width: "300px",
              height: "74px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 29.1
          loaded="true"
          image={e29291}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he29o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 29.2
          loaded="true"
          image={e29292}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he29o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 3 ? (
        <Error // 29.3
          loaded="true"
          image={e29293}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he29o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 29.4
          loaded="true"
          image={e29294}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he29o1");
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

export default E29;
