import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e31 from "../../../images/PART 3/e31.webp";
import Error from "../../ui/error/error";
import e31311 from "../../../images/PART 3/e31 31.1.webp";
import e31312 from "../../../images/PART 3/e31 31.2.webp";
import e31313 from "../../../images/PART 3/e31 31.3.webp";

const E31 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);

  const nextPage = () => {
    navigate("/e32");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e31} width="640px" height="542px" alt="e31" />
          <div // Ошибка 21.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "110px",
              left: "calc(50% - 288px)",
              width: "220px",
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
              top: "110px",
              left: "calc(50% + 35px)",
              width: "230px",
              height: "70px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div // Ошибка 21.3
            className="button-cloud"
            style={{
              position: "absolute",
              top: "210px",
              left: "calc(50% + 35px)",
              width: "220px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "210px",
              left: "calc(50% -  288px)",
              width: "220px",
              height: "70px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 24.1
          loaded="true"
          image={e31311}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he31o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 24.2
          loaded="true"
          image={e31312}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he31o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 24.3
          loaded="true"
          image={e31313}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he31o3");
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

export default E31;
