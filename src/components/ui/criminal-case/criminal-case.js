import React, { useState } from "react";
import criminalcase from "../../../images/buttons/criminal_case.png";

function Criminal() {
  const zayava = (
    <a
      href="https://drive.google.com/file/d/1ogUDREkHV6kWEG-wtAslDpj2FrXNxiS1/view"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>Заявление о преступлении</button>
    </a>
  );
  const protokoldoprosa = (
    <a
      href="https://drive.google.com/file/d/1pjE-OOjKm-Cj78MKxQJqr5UiEXChIxAF/view"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>Протокол допроса потерпевшей</button>
    </a>
  );
  const uzop = (
    <a
      href="https://drive.google.com/file/d/1p5y9GCvhO-zizn7QQAFNkAJLZNZvGYZG/view"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>Протокол УЗОП</button>
    </a>
  );
  const raportobnaruzhenii = (
    <a
      href="https://drive.google.com/file/d/1vMlOar6blg4XyuUdUvM2UYXwNP--13F7/view"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>Рапорт об обнаружении признаков преступления</button>
    </a>
  );
  const objasnenie = (
    <a
      href="https://drive.google.com/file/d/1f3E5XSKmwWhc25xdmgKMcrhdhn6ER_y1/view"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>Объяснение гражданки синичкиной</button>
    </a>
  );

  const way = JSON.parse(localStorage.getItem("mediumWay"));
  const step = JSON.parse(localStorage.getItem("step"));
  const [IsPopupOpened, setIsPopupOpened] = useState(false);
  console.log(way)
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
  return (
    <>
      <a title="Материалы дела">
        <img
          alt="Материалы дела"
          className="criminal-case"
          src={criminalcase}
          onClick={showPopup}
        />
        <div className="criminal-case-modal" id="criminal-case-modal">
          {step === 6 || step > 6? (
            <>
              {way === 1 ? (
                <>
                  {protokoldoprosa}
                  {zayava}
                </>
              ) : way === 2 ? (
                <>
                  {zayava}
                  {uzop}
                </>
              ) : way === 3 ? (
                <>
                  {zayava}
                  {raportobnaruzhenii}
                  {objasnenie}
                </>
              ) : (
                <>
                  {zayava}
                  {objasnenie}
                </>
              )}
            </>
          ): null}
        </div>
        </a>
    </>
  );
}
export default Criminal;
// {protokoldoprosa}
// {uzop}
// {raportobnaruzhenii}
// : (step === 6 & way === 1) ? {{zayava} & {protokoldoprosa}} : null
