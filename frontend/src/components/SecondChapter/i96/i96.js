import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i96 from "../../../images/PART 2/i96.webp";

const I96 = () => {
  const navigate = useNavigate();
  const SixNine = JSON.parse(localStorage.getItem("chapter2WrongWay69"));
  const EightOne = JSON.parse(localStorage.getItem("chapter2WrongWay81"));

  console.log(SixNine);
  console.log(EightOne);
  const nextPage = () => {
    if (SixNine === 1 || EightOne === 1) {
      navigate("/i98");
    } else navigate("/i97");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i96} width="640px" height="542px" alt="i96" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I96;
