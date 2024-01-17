import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i50 from "../../../images/PART 2/i50.webp";

const I50 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i51");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i50} width="640px" height="542px" alt="i50" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I50;
