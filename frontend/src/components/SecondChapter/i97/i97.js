import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i97 from "../../../images/PART 2/i97.webp";

const I97 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i99");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i97} width="640px" height="542px" alt="i97" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I97;
