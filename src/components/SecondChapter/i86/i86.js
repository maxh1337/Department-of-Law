import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i86 from "../../../images/PART 2/i86.webp";
import Error from "../../ui/error/error";
import i86861 from "../../../images/PART 2/i86 86.1.webp";

const I86 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i87");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i86} width="640px" height="542px" alt="i86" />
          <div // Ошибка 84.1
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "294px",
              left: "calc(50% - 265px)",
              width: "177px",
              height: "60px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "294px",
              left: "calc(50% - -50px)",
              width: "177px",
              height: "60px",
            }}
            onClick={nextPage}
          ></div>
        </>
      ) : (
        <Error // 86.1
          loaded="true"
          image={i86861}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h84o1");
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

export default I86;
