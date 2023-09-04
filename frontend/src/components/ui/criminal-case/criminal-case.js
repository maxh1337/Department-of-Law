import React, { useState } from "react";
import criminalcase from "../../../images/buttons/criminal_case.webp";
import DocumentPopup from "../documents-popup/DocumentPopup";

function Criminal() {
  // Проверка на открытие Popup Criminal Case
  const [IsPopupOpened, setIsPopupOpened] = useState(false);
  // Получение документов из хранилища браузера
  const documents = JSON.parse(localStorage.getItem("documents"));
  // Проверка на открытие Popup с фотографиями документа
  const [IsDocumentPopupOpened, setIsDocumentPopupOpened] = useState(false);

  //Стейт из которого документы будут подгружаться в Popup с документами
  const [docs, setDocs] = useState([]);
  const [docHref, setDocHref] = useState("");
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

  const test = [
    { image: "/static/media/zayava.cb8ad4f3b30f9b588794.png" },
    { image: "/static/media/zayava.cb8ad4f3b30f9b588794.png" },
  ];

  const showDocuments = (document) => {
    setIsDocumentPopupOpened(true);
    setDocs([...document.documents]);
    setDocHref(document.href);
    console.log(docs);
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
                  // href={document.href}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {document.onClick === false ? (
                    <button>{document.name}</button>
                  ) : (
                    <button onClick={() => showDocuments(document)}>
                      {document.name}
                    </button>
                  )}
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
        <DocumentPopup
          isVisible={IsDocumentPopupOpened}
          closePopup={() => {
            setIsDocumentPopupOpened(false);
          }}
          href={docHref}
        >
          {docs.length !== 0 &&
            docs.map((document, idx) => {
              return (
                <img
                  className="popup__image"
                  key={idx}
                  src={document.image}
                  onClick={(e) => e.stopPropagation()}
                />
              );
            })}
        </DocumentPopup>
      </a>
    </>
  );
}

export default Criminal;
