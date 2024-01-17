import i5 from "../../../images/PART 2/i5.webp";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Error from "../../ui/error/error";
import i551 from "../../../images/PART 2/i5 5.1.webp";
import i552 from "../../../images/PART 2/i5 5.2.webp";
import i553 from "../../../images/PART 2/i5 5.3.webp";
import CriminalCase from "../../ui/criminal-case/criminal-case";

const I5 = () => {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(0);
  var jija = 0;
  const nextPage = () => {
    redirect ? navigate("/i5") : setError(1);
  };

  const TriggerStyle = (e) => {
    const cloud = e.currentTarget;
    if (cloud.classList.contains("selected")) {
      cloud.classList.remove("selected");
      cloud.dataset.status = 0;
      if (cloud.dataset.status && cloud.dataset.status !== 0) {
        jija--;
      }
    } else {
      cloud.classList.add("selected");
      cloud.dataset.status = 1;
      if (cloud.dataset.status) {
        jija++;
      }
    }
    if (jija === 2) {
      setRedirect(true);
    }
  };
  return (
    <div>
      {redirect === true ? (
        <Navigate to="/i6" />
      ) : error === 0 ? (
        <>
          <CriminalCase />
          <img src={i5} width="640px" height="542px" alt="i5" />
          <div
            data-status="0"
            id="9-1"
            onClick={() => {
              setError(1); //5.1
            }}
            className="multiple-cloud"
            style={{
              position: "absolute",
              top: 240,
              left: "calc(50% - 210px)",
              width: 192,
              height: 66,
            }}
          ></div>
          <div
            data-status="0" // Правильный
            id="9-2"
            onClick={TriggerStyle}
            className="multiple-cloud"
            style={{
              position: "absolute",
              top: 300,
              left: "calc(50% - 210px)",
              width: 181,
              height: 95,
            }}
          ></div>
          <div
            data-status="0" // Правильный
            id="9-2"
            onClick={TriggerStyle}
            className="multiple-cloud"
            style={{
              position: "absolute",
              top: 350,
              left: "calc(50% - 210px)",
              width: 181,
              height: 95,
            }}
          ></div>
          <div
            data-status="0"
            id="9-3"
            onClick={() => {
              //5.2
              setError(2);
            }}
            className="multiple-cloud"
            style={{
              transform: "scaleX(-1)",
              position: "absolute",
              top: 232,
              left: "calc(50% - -13px)",
              width: 200,
              height: 85,
            }}
          ></div>
          <div
            data-status="0"
            id="9-4"
            onClick={() => {
              //5.3
              setError(3);
            }}
            className="multiple-cloud"
            style={{
              transform: "scaleX(-1)",
              position: "absolute",
              top: 350,
              left: "calc(50% - -30px)",
              width: 185,
              height: 95,
            }}
          ></div>
        </>
      ) : error === 1 ? (
        <Error //5.1
          loaded="true"
          image={i551}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h5o1");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
        <Error //5.2
          loaded="true"
          image={i552}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h5o2");
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Error //5.3
          loaded="true"
          image={i553}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate("/h5o3");
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

export default I5;
