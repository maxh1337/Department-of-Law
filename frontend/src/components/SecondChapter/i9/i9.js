import i9 from "../../../images/PART 2/i9.webp";
import cross from "../../../images/PART 2/cross.png";
import galochka from "../../../images/PART 2/galochka.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Error from "../../ui/error/error";
import i991 from "../../../images/PART 2/i9 9.1.webp";
import { doc9 } from "../../ui/allFiles2";
import CriminalCase from "../../ui/criminal-case/criminal-case";

const I9 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const documents = JSON.parse(localStorage.getItem("documents"));
  const newDocuments = [...documents, doc9];

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i9} width="640px" height="542px" alt="i9" />
          <a
            onClick={() => {
              localStorage.setItem("documents", JSON.stringify(newDocuments));
              navigate("/i10");
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
              setError(1);
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
          image={i991}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h9o1");
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

export default I9;
