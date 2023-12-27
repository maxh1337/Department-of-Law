import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e28 from "../../../images/PART 3/e28.webp";
import Error from "../../ui/error/error";
import e28281 from "../../../images/PART 3/e28 28.1.webp";

const E28 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);

  const nextPage = () => {
    navigate("/e29");
  };

  const wrongWay = () => {
    localStorage.setItem("e28", JSON.stringify("true"));
    navigate("/e64");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e28} width="640px" height="542px" alt="e28" />
          <div // Ошибка 21.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "200px",
              left: "calc(50% - 298px)",
              width: "300px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "272px",
              left: "calc(50% + 60px)",
              width: "220px",
              height: "70px",
            }}
            onClick={wrongWay}
          ></div>
          <div // Ошибка 28.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "360px",
              left: "calc(50% -  298px)",
              width: "300px",
              height: "74px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
        </>
      ) : (
        <Error // 28.1
          loaded="true"
          image={e28281}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he28o1");
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

export default E28;
