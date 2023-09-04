import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import p6read from "../../../images/buttons/exclamation.webp";
import i4 from "../../../images/PART 2/i4.webp";
import { useState } from "react";
import Error from "../../ui/error/error";
import i441 from "../../../images/PART 2/i4 4.1.webp";

const I4 = () => {
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
    if (jija === 4) {
      setRedirect(true);
    }
  };

  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i4} width="640px" height="542px" alt="i2" />
          <div
            data-status="0"
            id="9-1"
            onClick={TriggerStyle}
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
            data-status="0"
            id="9-2"
            onClick={TriggerStyle}
            className="multiple-cloud"
            style={{
              position: "absolute",
              top: 330,
              left: "calc(50% - 210px)",
              width: 181,
              height: 95,
            }}
          ></div>
          <div
            data-status="0"
            id="9-3"
            onClick={TriggerStyle}
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
            onClick={TriggerStyle}
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
          <div className="Buttons">
            <button className="linkButton" onClick={nextPage}>
              Дальше
            </button>
          </div>
        </>
      ) : (
        <Error
          loaded="true"
          image={i441}
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1e8gLT2Yg_LoFf7wgnMIYvtDTE-xzyQrP/view"
            >
              <button>Не понятно</button>
            </a>
          }
          button2style={{ display: "none" }}
        />
      )}
    </div>
  );
};

export default I4;
