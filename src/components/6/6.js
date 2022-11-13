import p6 from "../../images/p6.jpg";
import p6read from "../../images/buttons/exclamation.png";
import criminalcase from "../../images/buttons/criminal_case.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Six() {
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

  const nextPage = () => {
    navigate("/7");
    localStorage.setItem("step", 1);
  };

  return (
    <div>
      <a>
        <img
          alt="Читать заявление"
          id="p6-exclamation"
          src={p6read}
          onClick={nextPage}
        />
      </a>
      <a title="Материалы дела">
        <img
          alt="Материалы дела"
          className="criminal-case"
          src={criminalcase}
          onClick={showPopup}
        />
        <div className="criminal-case-modal">
          В деле пока нет сохраненных документов
        </div>
      </a>
      <img src={p6} width="640px" height="542px" alt="p5" />
    </div>
  );
}

export default Six;
