import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i47 from "../../../images/PART 2/i47.webp";

const I47 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i48");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i47} width="640px" height="542px" alt="i47" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I47;
