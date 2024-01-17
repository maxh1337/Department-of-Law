import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i61 from "../../../images/PART 2/i61.webp";

const I61 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i62");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i61} width="640px" height="542px" alt="i61" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I61;
