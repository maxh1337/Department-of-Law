import { useState } from "react";
import doc2 from "../../../images/doc2.webp";
import { useNavigate } from "react-router-dom";
import Error from "../../ui/error/error";
import Criminal from "../../ui/criminal-case/criminal-case";

function Fourteen() {
  const way = JSON.parse(localStorage.getItem("mediumWay"));
  const step = JSON.parse(localStorage.getItem("step"));
  const navigate = useNavigate();
  var jija = 0;
  const [errorShowed, setErrorShowed] = useState(0);

  if (step !== 7) {
    localStorage.setItem("step", 7);
  }
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
    if (jija === 4) {
      navigate("/14j");
      localStorage.setItem("step", 8);
    }
  };

  return (
    <>
      {errorShowed === 0 ? (
        <div>
          <Criminal />
          <img src={doc2} alt="5" width="640px" height="542px" />
          <div className="in-book">
            <div
              data-error-text="Думаешь, там еще и труп?"
              onClick={() => {
                setErrorShowed(1);
              }}
            >
              Иванов И.И. – судмедэксперт 21-16-18
            </div>
            <div data-status="0" id="7-1" className="" onClick={TriggerStyle}>
              Петров П.П. – специалист-криминалист 35-37-69
            </div>
            <div data-status="0" id="7-2" className="" onClick={TriggerStyle}>
              Васильев В.В. - ОУР 32-43-45
            </div>
            <div data-status="0" id="7-3" className="" onClick={TriggerStyle}>
              Данилов Д.Д. - ОУР 54-23-23
            </div>
            <div data-status="0" id="7-4" className="" onClick={TriggerStyle}>
              Артемов А.А. – инспектор-кинолог 33-54-65
            </div>
            <div
              data-error-text="Стоматолога или ЛОРа брать будешь?"
              onClick={() => {
                setErrorShowed(2);
              }}
            >
              Сидоров С.С. – врач 21-54-32
            </div>
            <div
              data-error-text="Не забудь еще взять «Толковый словарь» Даля!"
              onClick={() => {
                setErrorShowed(3);
              }}
            >
              Сидоров С.С. - переводчик 65-34-65
            </div>
            <div
              data-error-text="Экстрасенс??? Ты бы еще Гарри Поттера взял!"
              onClick={() => {
                setErrorShowed(4);
              }}
            >
              Кириллов К.К. – экстрасенс 45-73-76
            </div>
            <div
              data-error-text="Боишься переволноваться?"
              onClick={() => {
                setErrorShowed(5);
              }}
            >
              Якушев Я.Я. – психолог 65-76-89
            </div>
          </div>
        </div>
      ) : errorShowed === 1 ? (
        <Error
          onClick1={() => {
            setErrorShowed(0);
          }}
          text="Думаешь, там еще и труп?"
          button1="Назад"
          button2style={{ display: "none" }}
        />
      ) : errorShowed === 2 ? (
        <Error
          onClick1={() => {
            setErrorShowed(0);
          }}
          text="Стоматолога или ЛОРа брать будешь?"
          button1="Назад"
          button2style={{ display: "none" }}
        />
      ) : errorShowed === 3 ? (
        <Error
          onClick1={() => {
            setErrorShowed(0);
          }}
          text="Не забудь еще взять «Толковый словарь» Даля!"
          button1="Назад"
          button2style={{ display: "none" }}
        />
      ) : errorShowed === 4 ? (
        <Error
          onClick1={() => {
            setErrorShowed(0);
          }}
          text="Экстрасенс??? Ты бы еще Гарри Поттера взял!"
          button1="Назад"
          button2style={{ display: "none" }}
        />
      ) : (
        <Error
          onClick1={() => {
            setErrorShowed(0);
          }}
          text="Боишься переволноваться?"
          button1="Назад"
          button2style={{ display: "none" }}
        />
      )}
    </>
  );
}

export default Fourteen;
