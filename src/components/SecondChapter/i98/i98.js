import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i98 from "../../../images/PART 2/i98.webp";
import { useState } from "react";
import Error from "../../ui/error/error";
import i98981 from "../../../images/PART 2/i98 98.1.webp";
import i98982 from "../../../images/PART 2/i98 98.2.webp";
import i98983 from "../../../images/PART 2/i98 98.3.webp";

const I98 = () => {
  const navigate = useNavigate();
  const SixNine = JSON.parse(localStorage.getItem("chapter2WrongWay69"));
  const EightOne = JSON.parse(localStorage.getItem("chapter2WrongWay81"));
  const [error, setError] = useState(0);
  const [text, setText] = useState("");
  const [hWay, setHWay] = useState("");
  const [image, setImage] = useState();


  return (
    <div>
      {error === 0 ? (
        <>
          <CriminalCase />
          <img src={i98} width="640px" height="542px" alt="i98" />
          <div // Ошибка 91.1
            style={{
              position: "absolute",
              top: "170px",
              left: "calc(50% - 109px)",
              width: "247px",
              height: "303px",
              cursor: "pointer",
              border: "2px solid yellow",
            }}
            onClick={() => {
              if (SixNine === 1 && EightOne !== 1) {
                setText(
                  "Не должно было быть видеофиксации при обыске в жилище"
                );
                setImage(i98981);
                setHWay("/h98o1");
              } else if (SixNine !== 1 && EightOne === 1) {
                setText(
                  "Привлечение лица в качестве обвиняемого – обязательный этап предварительного следствия"
                );
                setImage(i98982);
                setHWay("/h98o2");
              } else if (SixNine === 1 && EightOne === 1) {
                setText(
                  "Не должно было быть видеофиксации при обыске в жилище, а также привлечение лица в качестве обвиняемого – обязательный этап предварительного следствия"
                );
                setImage(i98983);
                setHWay("/h98o3");
              }
              setError(1);
            }}
            ы
          ></div>
          {/*<div className="Buttons">*/}
          {/*  <button className="linkButton" onClick={nextPage}>*/}
          {/*    Далее*/}
          {/*  </button>*/}
          {/*</div>*/}
        </>
      ) : (
        <Error // 98
          loaded="true"
          // text={text}
          styleButtons={{ top: "150px", position: "absolute" }}
          image={image}
          onClick1={() => {
            navigate("/i100");
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                navigate(hWay);
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      )}
    </div>
  );
};

export default I98;
