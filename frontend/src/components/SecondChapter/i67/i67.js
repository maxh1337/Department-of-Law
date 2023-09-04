import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i67 from "../../../images/PART 2/i67.webp";

const I67 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i68");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i67} width="640px" height="542px" alt="i67" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I67;
