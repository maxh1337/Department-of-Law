import { FC, useState } from "react";
import Criminal from "../../ui/criminal-case/criminal-case";
import p30 from "../../../images/p30.webp";
import { useNavigate } from "react-router-dom";
import p29a from "../../../images/29-1a.webp";
import p29d from "../../../images/29-1d.webp";
import Error from "../../ui/error/error";

const CheckHallway = () => {
  const [error, setError] = useState(0);
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const nextPage = () => {
    navigate("/29-2");
  };

  return (
    <div>
      {error === 0 ? (
        step === 0 ? (
          <>
            <Criminal />
            <img width="640px" height="542px" src={p30} alt="p30" />
            <a
              onClick={() => setStep(1)}
              className="shkafi"
              style={{
                position: "absolute",
                top: 360,
                left: "calc(50% - 250px)",
                width: 450,
                height: 80,
                color: "white",
              }}
            ></a>
          </>
        ) : step === 1 ? (
          <>
            <Criminal />
            <img width="640px" height="542px" src={p29a} alt="29-1a" />
            <a
              onClick={() => setStep(2)}
              className="hover"
              style={{
                position: "absolute",
                top: 77,
                left: "calc(50% - 300px)",
                width: 254,
                height: 386,
                color: "white",
              }}
            ></a>
            <a
              onClick={() => setError(2)} // SetError Этот правый
              className="hover"
              style={{
                position: "absolute",
                top: 77,
                left: "calc(50% - -24px)",
                width: 254,
                height: 386,
                color: "white",
              }}
            ></a>
          </>
        ) : (
          <>
            <Criminal />
            <img width="640px" height="542px" src={p29d} alt="29-1d" />
            <a
              onClick={() => setError(1)} // Set Error этот левый
              className="hover"
              style={{
                position: "absolute",
                top: 77,
                left: "calc(50% - 300px)",
                width: 254,
                height: 386,
                color: "white",
              }}
            ></a>
            <a
              onClick={() => nextPage()}
              className="hover"
              style={{
                position: "absolute",
                top: 77,
                left: "calc(50% - -24px)",
                width: 254,
                height: 386,
                color: "white",
              }}
            ></a>
          </>
        )
      ) : error === 1 ? ( //Ткань
        <Error
          text="Подумай!"
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/document/d/19mMkEScDPikKX9HTi0XdTHIy1DjHG99c/edit?usp=share_link&ouid=103959558910814942921&rtpof=true&sd=true"
            >
              <button>Не понятно</button>
            </a>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        // Грунт
        <Error
          text="Подумай!"
          onClick1={() => {
            setError(0);
          }}
          button1="Понятно"
          newButton={
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/document/d/19mMkEScDPikKX9HTi0XdTHIy1DjHG99c/edit?usp=share_link&ouid=103959558910814942921&rtpof=true&sd=true"
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

export default CheckHallway;
