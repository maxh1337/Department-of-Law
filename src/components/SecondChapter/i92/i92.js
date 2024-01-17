import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i92 from "../../../images/PART 2/i92.webp";
import Error from "../../ui/error/error";
import i92921 from "../../../images/PART 2/i92 92.1.webp";
import i92922 from "../../../images/PART 2/i92 92.2.webp";
import i92923 from "../../../images/PART 2/i92 92.3.webp";

const I92 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i93");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i92} width="640px" height="542px" alt="i92" />
          <div // Ошибка 92.1
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "290px",
              left: "calc(50% - 310px)",
              width: "310px",
              height: "100px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 92.2
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "293px",
              left: "calc(50% - -60px)",
              width: "210px",
              height: "80px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "435px",
              left: "calc(50% - 300px)",
              width: "321px",
              height: "68px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 92.3
            className="buttonToChoose1"
            style={{
              position: "absolute",
              top: "435px",
              left: "calc(50% - -78px)",
              width: "200px",
              height: "60px",
            }}
            onClick={() => {
              setError(3);
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 92.1
          loaded="true"
          image={i92921}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h92o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error // 92.2
          loaded="true"
          image={i92922} // Тут должно будет быть i331
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h92o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 92.3
          loaded="true"
          image={i92923}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h92o3");
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

export default I92;
