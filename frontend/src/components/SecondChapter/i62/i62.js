import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i62 from "../../../images/PART 2/i62.webp";

const I62 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i63");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i62} width="640px" height="542px" alt="i62" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I62;
