import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i46 from "../../../images/PART 2/i46.webp";

const I46 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i47");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i46} width="640px" height="542px" alt="i46" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I46;
