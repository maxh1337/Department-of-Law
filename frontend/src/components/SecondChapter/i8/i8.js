import i8 from "../../../images/PART 2/i8.webp";
import cross from "../../../images/PART 2/cross.png";
import galochka from "../../../images/PART 2/galochka.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Error from "../../ui/error/error";
import i881 from "../../../images/PART 2/i8 8.1.webp";
import CriminalCase from "../../ui/criminal-case/criminal-case";

const I8 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i8} width="640px" height="542px" alt="i8" />
          <a
            onClick={() => {
              setError(1);
            }}
            style={{
              position: "absolute",
              top: "320px",
              left: "calc(50% + -108px)",
            }}
          >
            <img src={galochka} width="40px" height="40px" />
          </a>
          <a
            onClick={() => {
              navigate("/i9");
            }}
            style={{
              position: "absolute",
              top: "320px",
              left: "calc(50% + 70px)",
            }}
          >
            <img src={cross} width="40px" height="40px" />
          </a>
        </>
      ) : (
        <Error //7.1
          loaded="true"
          image={i881}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h7o1");
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

export default I8;
