import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i69 from "../../../images/PART 2/i69.webp";
import Error from "../../ui/error/error";
import i66661 from "../../../images/PART 2/i66 66.1.webp";

const I69 = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(0);
  const [wrongWay, setWrongWay] = useState(false);
  const nextPage = () => {
    if (wrongWay === true) {
      localStorage.setItem("chapter2WrongWay69", JSON.stringify(1));
      navigate("/i70");
    } else navigate("/i70");
  };

  // Если выбирают неправильный вариант ответа, то надо как то сохранить

  return (
    <div>
      <CriminalCase />
      <img src={i69} width="640px" height="542px" alt="i69" />
      <div // Правильный вариант
        className="button-cloud"
        style={{
          position: "absolute",
          top: "153px",
          left: "calc(50% - 290px)",
          width: "225px",
          height: "70px",
        }}
        onClick={nextPage}
      ></div>
      <div // Ошибка 69.1
        className="button-cloud"
        style={{
          position: "absolute",
          top: "153px",
          left: "calc(50% - -60px)",
          width: "216px",
          height: "70px",
        }}
        onClick={() => {
          setWrongWay(true);
          nextPage();
        }}
      ></div>
    </div>
  );
};

export default I69;
