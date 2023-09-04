import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i70 from "../../../images/PART 2/i70.webp";

const I70 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i71");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i70} width="640px" height="542px" alt="i70" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I70;
