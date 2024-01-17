import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e54 from "../../../images/PART 3/e54.webp";
import Error from "../../ui/error/error";
import e54541 from "../../../images/PART 3/e54 54.1.webp";
import e54542 from "../../../images/PART 3/e54 54.2.webp";

const E54 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const [firstCorrect, setFirstCorrect] = useState(false);
  const [secondCorrect, setSecondCorrect] = useState(false);

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e54} width="640px" height="542px" alt="e49" />
          <div
            className={
              firstCorrect === false ? "button-cloud" : "button-cloud selected"
            }
            style={{
              position: "absolute",
              top: "125px",
              left: "calc(50% - 303px)",
              width: "250px",
              height: "70px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div
            className={
              secondCorrect === false ? "button-cloud" : "button-cloud selected"
            }
            style={{
              position: "absolute",
              top: "125px",
              left: "calc(50% + 50px)",
              width: "250px",
              height: "70px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "355px",
              left: "calc(50% - 303px)",
              width: "250px",
              height: "70px",
            }}
            onClick={() => {
              navigate("/e55");
            }}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "365px",
              left: "calc(50% + 50px)",
              width: "250px",
              height: "70px",
            }}
            onClick={() => {
              localStorage.setItem("e54", JSON.stringify(true));
              navigate("/e58"); // Ложный путь 54
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 49.1
          loaded="true"
          image={e54541}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he54o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 49.2
          loaded="true"
          image={e54542}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he54o2");
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

export default E54;
