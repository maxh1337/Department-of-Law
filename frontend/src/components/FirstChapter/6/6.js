import p6 from "../../../images/p6.webp";
import p6read from "../../../images/buttons/exclamation.webp";
import criminalcase from "../../../images/buttons/criminal_case.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";

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
    const zayava = {
      href: "https://drive.google.com/file/d/1ogUDREkHV6kWEG-wtAslDpj2FrXNxiS1/view",
      name: "Заявление о преступлении",
    };

    const documents = JSON.parse(localStorage.getItem("documents"));
    localStorage.setItem("documents", JSON.stringify([zayava]));

    navigate("/7");
    localStorage.setItem("step", 1);
  };

  return (
    <div>
      <CriminalCase />
      <a>
        <img
          alt="Читать заявление"
          id="p6-exclamation"
          src={p6read}
          onClick={nextPage}
        />
      </a>
      <img src={p6} width="640px" height="542px" alt="p5" />
    </div>
  );
}

export default Six;
