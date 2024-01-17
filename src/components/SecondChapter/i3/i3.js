import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i3 from "../../../images/PART 2/i3.webp";
import i332 from "../../../images/PART 2/i3 3.2.webp";
import i331 from "../../../images/PART 2/i3 3.1.webp";
import { useState } from "react";
import Error from "../../ui/error/error";

const I3 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const nextPage = () => {
    navigate("/i4");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i3} width="640px" height="542px" alt="i3" />
          <div // Ошибка 3.1 А есть основания
            className="button-cloud"
            style={{
              position: "absolute",
              top: "172px",
              left: "calc(50% - 289px)",
              width: "216px",
              height: "70px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div // Ошибка 3.2 Кого будешь перехватывать
            className="button-cloud"
            style={{
              position: "absolute",
              top: "155px",
              left: "calc(50% - 40px)",
              width: "200px",
              height: "70px",
            }}
            onClick={() => {
              setError(2);
            }}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "240px",
              left: "calc(50% + 100px)",
              width: "200px",
              height: "70px",
            }}
            onClick={nextPage}
          ></div>
        </>
      ) : error === 1 ? (
        <Error // 3.1
          loaded="true"
          image={i331} // Тут должно будет быть i331
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h3o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error // 3.2
          loaded="true"
          image={i332}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h3o2");
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

export default I3;
