/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Criminal from "../../ui/criminal-case/criminal-case";
import Error from "../../ui/error/error";
import p29кк from "../../../images/p29кк.jpg";
import p29к from "../../../images/p29к.webp";
import p29к2 from "../../../images/p29к2.webp";
import p29к3 from "../../../images/p29к3.webp";
import p29к4 from "../../../images/p29к4.webp";
import p29к5 from "../../../images/p29к5.webp";
import p29к6 from "../../../images/p29к6.webp";
import { useNavigate } from "react-router-dom";

const step = JSON.parse(localStorage.getItem("step"));
if (step !== 15) {
  localStorage.setItem("step", 15);
}

function Twentynine2() {
  const [error, setError] = useState(0);
  const [evidence, setEvidence] = useState(0);
  const [showButtonState, setShowButtonState] = useState(0);
  const navigate = useNavigate();
  const [frst, setFrst] = useState(0);
  const [scnd, setScnd] = useState(0);
  const [thrd, setThrd] = useState(0);
  const [frth, setFrth] = useState(0);
  const [fifth, setFifth] = useState(0);
  const [sixth, setSixth] = useState(0);
  const nextPage = () => {
    navigate("/30");
  };
  return (
    <div>
      {error === 0 ? (
        evidence === 0 ? (
          <>
            <Criminal />
            <img width="640px" height="542px" src={p29кк} alt="p29к" />
            <div className="Buttons">
              <a //След ноги на кресле
                data-to-page="p29к2"
                onClick={(e) => {
                  setFrst(1);
                  setShowButtonState(showButtonState + 1);
                  setEvidence(2);
                }}
                className={`${frst}` >= 1 ? `hover hover_active` : `hover`}
                style={{
                  position: "absolute",
                  top: 300,
                  left: "calc(50% - 20px)",
                  width: 70,
                  height: 70,
                  color: "white",
                }}
              >
                {""}
              </a>
              <a //Отпечаток пальцев на телевизоре
                data-to-page="p29к3"
                onClick={(e) => {
                  setScnd(1);
                  setShowButtonState(showButtonState + 1);
                  setEvidence(6);
                }}
                className={`${scnd}` >= 1 ? `hover hover_active` : `hover`}
                style={{
                  position: "absolute",
                  top: 300,
                  left: "calc(50% - 230px)",
                  width: 70,
                  height: 70,
                  color: "white",
                }}
              >
                {""}
              </a>
              <a //Отпечаток пальцев шкафу
                data-to-page="p29к3-2"
                onClick={(e) => {
                  setThrd(1);
                  setShowButtonState(showButtonState + 1);
                  setEvidence(3);
                }}
                className={`${thrd}` >= 1 ? `hover hover_active` : `hover`}
                style={{
                  position: "absolute",
                  top: 120,
                  left: "calc(50% - 310px)",
                  width: 60,
                  height: 60,
                  color: "white",
                }}
              >
                {""}
              </a>
              <a //Отпечаток пальцев около яблока
                data-to-page="p29к3-3"
                onClick={(e) => {
                  setFrth(1);
                  setShowButtonState(showButtonState + 1);
                  setEvidence(6);
                }}
                className={`${frth}` >= 1 ? `hover hover_active` : `hover`}
                style={{
                  position: "absolute",
                  top: 206,
                  left: "calc(50% - 56px)",
                  width: 30,
                  height: 30,
                  color: "white",
                }}
              >
                {""}
              </a>
              <a //Яблоко
                data-to-page="p29к4"
                onClick={(e) => {
                  setFifth(1);
                  setShowButtonState(showButtonState + 1);
                  setEvidence(4);
                }}
                className={`${fifth}` >= 1 ? `hover hover_active` : `hover`}
                style={{
                  position: "absolute",
                  top: 195,
                  left: "calc(50% - 30px)",
                  width: 30,
                  height: 30,
                  color: "white",
                }}
              >
                {""}
              </a>
              <a //Пуговица
                data-to-page="p29к5"
                onClick={(e) => {
                  setSixth(1);
                  setShowButtonState(showButtonState + 1);
                  setEvidence(5);
                }}
                className={`${sixth}` >= 1 ? `hover hover_active` : `hover`}
                style={{
                  position: "absolute",
                  top: 390,
                  left: "calc(50% - 40px)",
                  width: 40,
                  height: 40,
                  color: "white",
                }}
              >
                {""}
              </a>
              {showButtonState >= 6 ? (
                <button onClick={nextPage}>Дальше</button>
              ) : null}
            </div>
          </>
        ) : evidence === 2 ? (
          <>
            <Criminal />
            <img width="640px" height="542px" src={p29к2} alt="p29к2" />
            <div className="Buttons">
              <a
                data-to-page="p29к"
                onClick={() => {
                  setEvidence(0);
                }}
                className="shkafi"
                style={{
                  position: "absolute",
                  top: 80,
                  left: "calc(50% - 150px)",
                  width: 300,
                  height: 80,
                  color: "white",
                }}
              >
                {""}
              </a>
              <a
                data-to-page="p29к2о"
                onClick={() => {
                  setError(1);
                }}
                className="shkafi"
                style={{
                  position: "absolute",
                  top: 400,
                  left: "calc(50% - 250px)",
                  width: 450,
                  height: 80,
                  color: "white",
                }}
              >
                {""}
              </a>
            </div>
          </>
        ) : evidence === 3 ? (
          <>
            <Criminal />
            <img width="640px" height="542px" src={p29к3} alt="p29к3" />
            <div className="Buttons">
              <a
                data-to-page="p29к"
                onClick={() => {
                  setError(2);
                }}
                className="shkafi"
                style={{
                  position: "absolute",
                  top: 80,
                  left: "calc(50% - 150px)",
                  width: 300,
                  height: 80,
                  color: "white",
                }}
              >
                {""}
              </a>
              <a
                data-to-page="p29к3о"
                onClick={() => {
                  setEvidence(0);
                }}
                className="shkafi"
                style={{
                  position: "absolute",
                  top: 400,
                  left: "calc(50% - 250px)",
                  width: 450,
                  height: 80,
                  color: "white",
                }}
              >
                {""}
              </a>
            </div>
          </>
        ) : evidence === 4 ? (
          <>
            <Criminal />
            <img width="640px" height="542px" src={p29к4} alt="p29к4" />
            <div className="Buttons">
              <a
                data-to-page="p29к"
                onClick={() => {
                  setEvidence(0);
                }}
                className="shkafi"
                style={{
                  position: "absolute",
                  top: 80,
                  left: "calc(50% - 150px)",
                  width: 300,
                  height: 80,
                  color: "white",
                }}
              >
                {""}
              </a>
              <a
                data-to-page="p29к4о"
                onClick={() => {
                  setError(3);
                }}
                className="shkafi"
                style={{
                  position: "absolute",
                  top: 400,
                  left: "calc(50% - 250px)",
                  width: 450,
                  height: 80,
                  color: "white",
                }}
              >
                {""}
              </a>
            </div>
          </>
        ) : evidence === 5 ? (
          <>
            <Criminal />
            <img width="640px" height="542px" src={p29к5} alt="p29к5" />
            <div className="Buttons">
              <a
                data-to-page="p29к"
                onClick={() => {
                  setEvidence(0);
                }}
                className="shkafi"
                style={{
                  position: "absolute",
                  top: 80,
                  left: "calc(50% - 150px)",
                  width: 300,
                  height: 80,
                  color: "white",
                }}
              >
                {""}
              </a>
              <a
                data-to-page="p29к5о"
                onClick={() => {
                  setError(4);
                }}
                className="shkafi"
                style={{
                  position: "absolute",
                  top: 200,
                  left: "calc(50% - 250px)",
                  width: 450,
                  height: 80,
                  color: "white",
                }}
              >
                {""}
              </a>
            </div>
          </>
        ) : (
          <>
            <Criminal />
            <img width="640px" height="542px" src={p29к6} alt="p29к6" />
            <div className="Buttons">
              <a
                data-to-page="p29к"
                onClick={() => {
                  setError(4);
                }}
                className="shkafi"
                style={{
                  position: "absolute",
                  top: 80,
                  left: "calc(50% - 150px)",
                  width: 300,
                  height: 80,
                  color: "white",
                }}
              >
                {""}
              </a>
              <a
                data-to-page="p29к6о"
                onClick={() => {
                  setEvidence(0);
                }}
                className="shkafi"
                style={{
                  position: "absolute",
                  top: 360,
                  left: "calc(50% - 250px)",
                  width: 450,
                  height: 80,
                  color: "white",
                }}
              >
                {""}
              </a>
            </div>
          </>
        )
      ) : error === 1 ? (
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
              href="https://docs.google.com/document/d/1xWvu9AnfNT_fRCiEVAUXXR0XEN0AyKD6/edit?usp=share_link&ouid=103959558910814942921&rtpof=true&sd=true"
            >
              <button>Не понятно</button>
            </a>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 2 ? (
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
              href="https://docs.google.com/document/d/14sB0pD8B8q7cqGTmifWnQzy7N3szKDaE/edit?usp=share_link&ouid=103959558910814942921&rtpof=true&sd=true"
            >
              <button>Не понятно</button>
            </a>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 3 ? (
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
              href="https://docs.google.com/document/d/1eGy_w0InRNLY46OGqTjrts9BIyc5m1ap/edit?usp=share_link&ouid=103959558910814942921&rtpof=true&sd=true"
            >
              <button>Не понятно</button>
            </a>
          }
          button2style={{ display: "none" }}
        />
      ) : error === 4 ? (
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
              href="https://docs.google.com/document/d/124zV7amX4PCQEhUcZgsUuZlAIJhIBTjz/edit?usp=share_link&ouid=103959558910814942921&rtpof=true&sd=true"
            >
              <button>Не понятно</button>
            </a>
          }
          button2style={{ display: "none" }}
        />
      ) : (
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
              href="https://drive.google.com/file/d/1KDVs9OQs31MTTIFIP-zIVe9hDEwONRhE/view"
            >
              <button>Не понятно</button>
            </a>
          }
          button2style={{ display: "none" }}
        />
      )}
    </div>
  );
}

export default Twentynine2;
