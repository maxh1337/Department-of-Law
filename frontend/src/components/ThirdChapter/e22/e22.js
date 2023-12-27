import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e22 from "../../../images/PART 3/e22.webp";
import Error from "../../ui/error/error";
import e from "../../../images/PART 3/e23 23.1.webp";

const E22 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);

  const nextPage = () => {
    navigate("/e23");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e22} width="640px" height="542px" alt="e22" />
          <div // Ошибка 21.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "192px",
              left: "calc(50% - 235px)",
              width: "120px",
              height: "120px",
            }}
            onClick={nextPage}
          ></div>
          <div // Ошибка 21.2
            className="button-cloud"
            style={{
              position: "absolute",
              top: "192px",
              left: "calc(50% - -94px)",
              width: "120px",
              height: "120px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
        </>
      ) : (
        <Error // 21.1
          loaded="true"
          image={e}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he22o1");
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

export default E22;
