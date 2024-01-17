import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e16 from "../../../images/PART 3/e16.webp";
import Error from "../../ui/error/error";
import e16161 from "../../../images/PART 3/e16 16.1.webp";
import e16162 from "../../../images/PART 3/e16 16.2.webp";
import { useState } from "react";

const E16 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);

  const nextPage = () => {
    navigate("/e17");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e16} width="640px" height="542px" alt="e16" />
          <div // Ошибка 16.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "177px",
              left: "calc(50% - 74px)",
              width: "354px",
              height: "78px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 16.2
            className="button-cloud"
            style={{
              position: "absolute",
              top: "290px",
              left: "calc(50% - 70px)",
              width: "354px",
              height: "78px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "397px",
              left: "calc(50% - 64px)",
              width: "354px",
              height: "78px",
            }}
            onClick={nextPage}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 16.1
          loaded="true"
          image={e16161}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he16o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 16.2
          loaded="true"
          image={e16162}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he16o2");
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

export default E16;
