import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e39 from "../../../images/PART 3/e39.webp";
import Error from "../../ui/error/error";
import e39391 from "../../../images/PART 3/e39 39.1.webp";
import e39392 from "../../../images/PART 3/e39 39.2.webp";
import e39393 from "../../../images/PART 3/e39 39.3.webp";

const E39 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e39} width="640px" height="542px" alt="e39" />
          <div // Ошибка 21.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "170px",
              left: "calc(50% - 320px)",
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
              top: "175px",
              left: "calc(50% + 50px)",
              width: "230px",
              height: "70px",
            }}
            onClick={() => {
              navigate("/e40");
            }}
          ></div>
          <div // Ошибка 21.3
            className="button-cloud"
            style={{
              position: "absolute",
              top: "290px",
              left: "calc(50% + 2px)",
              width: "300px",
              height: "70px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "290px",
              left: "calc(50% - 320px)",
              width: "300px",
              height: "70px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 39.1
          loaded="true"
          image={e39391}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he39o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 39.2
          loaded="true"
          image={e39392}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he39o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 39.3
          loaded="true"
          image={e39393}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he39o3");
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

export default E39;
