import p8 from "../../../images/p8.webp";
import criminalcase from "../../../images/buttons/criminal_case.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./8.css";
export const choosenWay = {};

function Eight() {
  const [IsPopupOpened, setIsPopupOpened] = useState(false);
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

  const nextPage1 = () => {
    navigate("/10");
    choosenWay.foo = 1;
    localStorage.setItem("step", 3);
  };
  const nextPage2 = () => {
    navigate("/10");
    choosenWay.foo = 2;
    localStorage.setItem("step", 3);
  };
  const nextPage3 = () => {
    navigate("/9");
    choosenWay.foo = 3;
    localStorage.setItem("step", 3);
  };
  const nextPage4 = () => {
    navigate("/9");
    choosenWay.foo = 4;
    localStorage.setItem("step", 3);
  };

  return (
    <div>
      <a title="Материалы дела">
        <img
          alt="Материалы дела"
          className="criminal-case"
          src={criminalcase}
          onClick={showPopup}
        />
        <div className="criminal-case-modal">
          <a
            href="https://drive.google.com/file/d/1ogUDREkHV6kWEG-wtAslDpj2FrXNxiS1/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Заявление о преступлении</button>
          </a>
        </div>
      </a>
      <img src={p8} alt="2" width="640px" height="542px" />
      <div
        className="button-cloud"
        style={{
          position: "absolute",
          top: "83px",
          left: "calc(50% - 280px)",
          width: "200px",
          height: "70px",
        }}
        onClick={nextPage1}
      ></div>
      <div
        className="button-cloud"
        style={{
          position: "absolute",
          top: "87px",
          left: "calc(50% + 10px)",
          width: "240px",
          height: "77px",
        }}
        onClick={nextPage2}
      ></div>
      <div
        className="button-cloud"
        style={{
          position: "absolute",
          top: "205px",
          left: "calc(50% - 285px)",
          width: "230px",
          height: "85px",
        }}
        onClick={nextPage3}
      ></div>
      <div
        className="button-cloud"
        style={{
          position: "absolute",
          top: "250px",
          left: "calc(50% - 10px)",
          width: "270px",
          height: "85px",
        }}
        onClick={nextPage4}
      ></div>
    </div>
  );
}
export default Eight;
