import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e57 from "../../../images/PART 3/e57.webp";
import Error from "../../ui/error/error";
import e57571 from "../../../images/PART 3/e57 57.1.webp";
import e57572 from "../../../images/PART 3/e57 57.2.webp";
import e57573 from "../../../images/PART 3/e57 57.3.webp";

const E57 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e57} width="640px" height="542px" alt="e49" />
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "235px",
              left: "calc(50% - 313px)",
              width: "563px",
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
              top: "315px",
              left: "calc(50% - 313px)",
              width: "370px",
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
              top: "405px",
              left: "calc(50% - 313px)",
              width: "500px",
              height: "70px",
            }}
            onClick={() => {
              navigate("/e57-1");
            }}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "320px",
              left: "calc(50% + 100px)",
              width: "210px",
              height: "65px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 49.1
          loaded="true"
          image={e57571}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he57o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 57.2
          loaded="true"
          image={e57572}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he57o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 57.3
          loaded="true"
          image={e57573}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he57o3");
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

export default E57;
