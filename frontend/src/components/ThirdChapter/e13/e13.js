import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e13 from "../../../images/PART 3/e13.webp";
import Error from "../../ui/error/error";
import e13131 from "../../../images/PART 3/e13 13.1.webp";
import e13132 from "../../../images/PART 3/e13 13.2.webp";
import { useState } from "react";

const E13 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);

  const nextPage = () => {
    navigate("/e14");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e13} width="640px" height="542px" alt="e13" />
          <div // Ошибка 13.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "122px",
              left: "calc(50% - 318px)",
              width: "334px",
              height: "88px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 13.2
            className="button-cloud"
            style={{
              position: "absolute",
              top: "252px",
              left: "calc(50% - 315px)",
              width: "334px",
              height: "110px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "405px",
              left: "calc(50% - 313px)",
              width: "334px",
              height: "80px",
            }}
            onClick={nextPage}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 13.1
          loaded="true"
          image={e13131}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he13o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 13.2
          loaded="true"
          image={e13132}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he13o2");
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

export default E13;
