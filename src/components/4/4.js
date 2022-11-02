import p10 from "../../images/p10.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Error from "../error/error";
import criminalcase from "../../images/buttons/criminal_case.png";

function Four() {
  const [IsPopupOpened, setIsPopupOpened] = useState(false);
  const [errorShowed, setErrorShowed] = useState(false);
  var jija = 0;
  const navigate = useNavigate();

  const showPopup = () => {
    const popup = document.querySelector(".criminal-case-modal");
    if (IsPopupOpened === false) {
      popup.classList.add("popup-show");
      setIsPopupOpened(true);
    } else {
      popup.classList.remove("popup-show");
      setIsPopupOpened(false);
    }
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
  };
  const GoBack = () => {
    setErrorShowed(false);
  };
  const nextPage = () => {
    if (jija === 5) {
      navigate("/5");
      localStorage.setItem("step", 5);
    } else {
      setErrorShowed(true);
    }
  };

  return (
    <>
      {errorShowed === false ? (
        <div>
          <a title="Материалы дела">
            <img
              alt="Материалы дела"
              className="criminal-case"
              src={criminalcase}
              onClick={showPopup}
            />
            <div className="criminal-case-modal" id="criminal-case-modal">
              <a
                href="https://drive.google.com/file/d/1ogUDREkHV6kWEG-wtAslDpj2FrXNxiS1/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Заявление о преступлении</button>
              </a>
            </div>
          </a>
          <img src={p10} alt="2" width="640px" height="542px" />
          <div className="Buttons">
            <button onClick={nextPage}>Продолжить</button>
          </div>
          <div
            data-status="0"
            className="multiple-cloud"
            id="4-1"
            onClick={TriggerStyle}
            style={{
              position: "absolute",
              top: "53px",
              left: "calc(50% - 312px)",
              width: "232px",
              height: "75px",
            }}
          ></div>
          <div
            data-status="0"
            className="multiple-cloud"
            id="4-2"
            onClick={TriggerStyle}
            style={{
              position: "absolute",
              top: "38px",
              left: "calc(50% - 44px)",
              width: "260px",
              height: "90px",
            }}
          ></div>
          <div
            data-status="0"
            className="multiple-cloud"
            id="4-3"
            onClick={TriggerStyle}
            style={{
              position: "absolute",
              top: "157px",
              left: "calc(50% - 275px)",
              width: "260px",
              height: "95px",
            }}
          ></div>
          <div
            data-status="0"
            className="multiple-cloud"
            id="4-4"
            onClick={TriggerStyle}
            style={{
              position: "absolute",
              top: "160px",
              left: "calc(50% + 45px)",
              width: "220px",
              height: "85px",
            }}
          ></div>
          <div
            data-status="0"
            className="multiple-cloud"
            id="4-5"
            onClick={TriggerStyle}
            style={{
              position: "absolute",
              top: "278px",
              left: "calc(50% - 110px)",
              width: "295px",
              height: "90px",
            }}
          ></div>
        </div>
      ) : (
        <Error
          text="И ЭТО ВСЕ, ЧТО ТЫ ПОМНИШЬ ?"
          button1="Назад"
          button2style={{ display: "none" }}
          onClick1={GoBack}
        />
      )}
    </>
  );
}

export default Four;
