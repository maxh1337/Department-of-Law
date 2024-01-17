import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i44 from "../../../images/PART 2/i44.webp";

const I44 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i45");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i44} width="640px" height="542px" alt="i44" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I44;
