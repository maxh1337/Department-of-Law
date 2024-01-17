import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e38 from "../../../images/PART 3/e38.webp";
import Error from "../../ui/error/error";
import e38381 from "../../../images/PART 3/e38 38.1.webp";
import { doc38 } from "../../ui/allFiles3";

const E38 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc38];

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={e38} width="640px" height="542px" alt="e38" />
          <div // Ошибка 21.1
            className="button-cloud"
            style={{
              position: "absolute",
              top: "170px",
              left: "calc(50% - 315px)",
              width: "360px",
              height: "95px",
            }}
            onClick={() => {
              localStorage.setItem("documents", JSON.stringify(newDocuments));
              navigate("/e39");
            }}
          ></div>
          <div // Ошибка 21.2
            className="button-cloud"
            style={{
              position: "absolute",
              top: "250px",
              left: "calc(50% + 45px)",
              width: "265px",
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
              top: "345px",
              left: "calc(50% -  288px)",
              width: "360px",
              height: "110px",
            }}
            onClick={() => {
              setError(1);
            }}
          ></div>
        </>
      ) : (
        <Error // 38.1
          loaded="true"
          image={e38381}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/he38o1");
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

export default E38;
