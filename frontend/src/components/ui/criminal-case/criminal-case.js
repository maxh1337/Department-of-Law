import React, { useState } from "react";
import criminalcase from "../../../images/buttons/criminal_case.webp";

function Criminal() {
  const [IsPopupOpened, setIsPopupOpened] = useState(false);
  // const newDocuments = [...documents, zayava];

  const documents = JSON.parse(localStorage.getItem("documents"));

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
          {documents !== null ? (
            documents.map((document, idx) => {
              return (
                <a
                  href={document.href}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>{document.name}</button>
                </a>
              );
            })
          ) : (
            <>
              <a href={document.href} target="_blank" rel="noopener noreferrer">
                В деле пока не сохраненных документов
              </a>
            </>
          )}
        </div>
      </a>
    </>
  );
}

export default Criminal;
