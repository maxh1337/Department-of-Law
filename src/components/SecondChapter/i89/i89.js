import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i89 from "../../../images/PART 2/i89.webp";

const I89 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i90");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i89} width="640px" height="542px" alt="i89" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I89;
