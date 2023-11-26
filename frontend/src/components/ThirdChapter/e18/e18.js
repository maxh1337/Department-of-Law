import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e18 from "../../../images/PART 3/e18.webp";
import Error from "../../ui/error/error";
import e18181 from "../../../images/PART 3/e18 18.1.webp";
import { useState } from "react";

const E18 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);

  const nextPage = () => {
    navigate("/e19");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e18} width="640px" height="542px" alt="e18" />
          <div // Ошибка 18.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "183px",
              left: "calc(50% - 190px)",
              width: "200px",
              height: "254px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
          <div
            className="button-cloud"
            style={{
              position: "absolute",
              top: "183px",
              left: "calc(50% - -20px)",
              width: "200px",
              height: "254px",
            }}
            onClick={nextPage}
          ></div>
        </>
      ) : (
        <Error // 19.1
          loaded="true"
          image={e18181}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he19o1");
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

export default E18;
