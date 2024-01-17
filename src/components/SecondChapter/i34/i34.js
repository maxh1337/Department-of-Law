import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i34 from "../../../images/PART 2/i34.webp";

const I34 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i35");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i34} width="640px" height="542px" alt="i34" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I34;
