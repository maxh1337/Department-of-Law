import { useState } from "react";
import { useNavigate } from "react-router-dom";
import doc1 from "../../images/doc1.jpg";
import { choosenWay } from "../3/3";
export const mediumWay = {};

function Five() {
  const [way, setWay] = useState(0);
  const navigate = useNavigate();
  const [nochangeLC, setNochangeLC] = useState(false);
  const step = JSON.parse(localStorage.getItem("step"));

  if (step !== 5) {
    localStorage.setItem("step", 5);
  }

  const nextPage1 = () => {
    mediumWay.foo = 1; //После этого ничего только протокол допроса
    navigate("/6");
    localStorage.setItem("mediumWay", 1);
    localStorage.setItem("step", 6);
  };
  const nextPage2 = () => {
    mediumWay.foo = 2;
    setWay(1); // Только УЗОП
    navigate("/6");
    localStorage.setItem("mediumWay", 2);
    localStorage.setItem("step", 6);
  };
  const nextPage3 = () => {
    mediumWay.foo = 3;
    setWay(1); // Рапорт и объяснение
    choosenWay.foo = 4;
    localStorage.setItem("mediumWay", 3);
    localStorage.setItem("step", 6);
    setNochangeLC(true);
  };
  const nextPage4 = () => {
    mediumWay.foo = 4;
    setWay(1); // Объяснение
    navigate("/6");
    localStorage.setItem("step", 6);
    if (nochangeLC === false) {
      localStorage.setItem("mediumWay", 4);
    }
  };
  console.log(choosenWay);
  return (
    <>
      {choosenWay.foo === 1 ? (
        <div>
          <img src={doc1} alt="5" width="640px" height="542px" />
          <div className="doc-content">
            <div className="Buttons">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1pjE-OOjKm-Cj78MKxQJqr5UiEXChIxAF/view"
              >
                <button>Открыть протокол допроса</button>
              </a>
              <br />
              <br />
              <button onClick={nextPage1}>Продолжить</button>
            </div>
          </div>
        </div>
      ) : choosenWay.foo === 2 ? (
        <div>
          <img src={doc1} alt="5" width="640px" height="542px" />
          <div className="doc-content">
            <div className="Buttons">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1p5y9GCvhO-zizn7QQAFNkAJLZNZvGYZG/view"
              >
                <button>Открыть протокол УЗОП</button>
              </a>
              <br />
              <br />
              <button onClick={nextPage2}>Продолжить</button>
            </div>
          </div>
        </div>
      ) : choosenWay.foo === 3 ? (
        <div>
          <img src={doc1} alt="5" width="640px" height="542px" />
          <div className="doc-content">
            <div className="Buttons">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1vMlOar6blg4XyuUdUvM2UYXwNP--13F7/view"
              >
                <button>
                  Открыть рапорт об обнаружении признаков преступления
                </button>
              </a>
              <br />
              <br />
              <button onClick={nextPage3}>Продолжить</button>
            </div>
          </div>
        </div>
      ) : (
        // : (way === 4) ?
        <div>
          <img src={doc1} alt="5" width="640px" height="542px" />
          <div className="doc-content">
            <div className="Buttons">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1f3E5XSKmwWhc25xdmgKMcrhdhn6ER_y1/view"
              >
                <button>Открыть объяснение гражданки Синичкиной</button>
              </a>
              <br />
              <br />
              <button onClick={nextPage4}>Продолжить</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Five;
