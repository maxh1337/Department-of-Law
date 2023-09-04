import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i45 from "../../../images/PART 2/i45.webp";

const I45 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i46");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i45} width="640px" height="542px" alt="i45" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I45;
