import { useState } from "react";
import { useNavigate } from "react-router-dom";
import criminalcase from "../../images/buttons/criminal_case.png";
import doc1 from "../../images/doc1.jpg";
import Error from "../error/error";

function Nine() {
  const [IsPopupOpened, setIsPopupOpened] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

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
  const CheckAndRedirect = () => {
    const inputValue = document.getElementById("inp1").value;
    if (
      inputValue === "Ст. 51 Конституции РФ" ||
      inputValue === "ст. 51 Конституции РФ" ||
      inputValue === "Статья 51 Конституции РФ" ||
      inputValue === "статья 51 Конституции РФ" ||
      inputValue === "Ст. 51 Конституции России" ||
      inputValue === "ст. 51 Конституции России" ||
      inputValue === "Статья 51 Конституции России" ||
      inputValue === "статья 51 Конституции России" ||
      inputValue === "Ст. 51 Конституции Российской Федерации" ||
      inputValue === "ст. 51 Конституции Российской Федерации" ||
      inputValue === "Статья 51 Конституции Российской Федерации" ||
      inputValue === "статья 51 Конституции Российской Федерации"
    ) {
      navigate("/10");
      localStorage.setItem("step", 4);
    } else {
      setError(true);
    }
  };
  const setErrorNone = () => {
    setError(false);
  };

  return (
    <>
      {error === false ? (
        <div>
          <img width="640" height="542" src={doc1} alt="p9"></img>
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
          <div className="doc-content" name="form1">
            Объяснение:
            <br />
            Следователь отдела полиции № 5 СУ УМВД России лейтенант юстиции
            Епишев И.А. принял объяснение от гражданки Синичкиной Светланы
            Геннадьевны 08 ноября 1970 г.р., прож.: г. Умск, ул. Светлая, д.
            71А, кв. 32, индивидуальный предприниматель, моб. тел.:
            8(333)333-33-33. <br />
            <input
              placeholder="Заполните пропуск"
              style={{ width: "180px" }}
              id="inp1"
            ></input>
            ;мне разъяснена и понятна.
            <br />
            ...
            <br />
            <br />
            <button onClick={CheckAndRedirect}>Проверить</button>
          </div>
        </div>
      ) : (
        <Error
          onClick1={setErrorNone}
          button1="Понятно"
          text="Статья 51 Конституции РФ: «Никто не обязан свидетельствовать против себя самого, своего супруга и близких родственников, круг которых определяется федеральным законом»"
          button2style={{ display: "none" }}
          newButton={
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1xNBuRjMF6WrEE_I39d5oCKwZHIRm9JgW/view"
            >
              <button>Не понятно</button>
            </a>
          }
        />
      )}
    </>
  );
}

export default Nine;
