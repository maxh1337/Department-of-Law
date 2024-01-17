import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e17 from "../../../images/PART 3/e17.webp";
import Error from "../../ui/error/error";
import e18181 from "../../../images/PART 3/e18 18.1.webp";
import { useState } from "react";

const E17 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);

  const nextPage = () => {
    navigate("/e18");
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e17} width="640px" height="542px" alt="e17" />
          <div // Ошибка 17.1
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
          <div // Ошибка 16.2
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
        <Error // 17.1
          loaded="true"
          image={e18181}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he17o1");
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

export default E17;
