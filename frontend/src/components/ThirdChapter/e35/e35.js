import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e35 from "../../../images/PART 3/e35.webp";
import Error from "../../ui/error/error";
import e35351 from "../../../images/PART 3/e35 35.1.webp";
import e35352 from "../../../images/PART 3/e35 35.2.webp";

const E35 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);

  const nextPage = () => {
    navigate("/e36");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e35} width="640px" height="542px" alt="e35" />
          <div // Ошибка 21.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "100px",
              left: "calc(50% - 318px)",
              width: "340px",
              height: "100px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "240px",
              left: "calc(50% -  288px)",
              width: "250px",
              height: "100px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "380px",
              left: "calc(50% -  300px)",
              width: "400px",
              height: "155px",
            }}
            onClick={nextPage}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 24.1
          loaded="true"
          image={e35351}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he35o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 24.2
          loaded="true"
          image={e35352}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he35o2");
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

export default E35;
