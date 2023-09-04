import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i38 from "../../../images/PART 2/i38.webp";

const I38 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i39");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i38} width="640px" height="542px" alt="i38" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I38;
