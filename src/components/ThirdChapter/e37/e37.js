import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e37 from "../../../images/PART 3/e37.webp";
import Error from "../../ui/error/error";
import e37371 from "../../../images/PART 3/e37 37.1.webp";

const E37 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e37} width="640px" height="542px" alt="e37" />
          <div // Ошибка 21.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "215px",
              left: "calc(50% - 288px)",
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
              top: "215px",
              left: "calc(50% + 50px)",
              width: "230px",
              height: "70px",
            }}
            onClick={() => {
              navigate("/e38");
            }}
          ></div>
          <div // Ошибка 21.3
            className="button-cloud"
            style={{
              position: "absolute",
              top: "360px",
              left: "calc(50% + 2px)",
              width: "300px",
              height: "70px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "350px",
              left: "calc(50% -  288px)",
              width: "220px",
              height: "70px",
            }}
            onClick={() => {
              navigate("/e39");
            }}
          ></div>
        </>
      ) : (
        <Error // 37.1
          loaded="true"
          image={e37371}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he37o1");
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

export default E37;
