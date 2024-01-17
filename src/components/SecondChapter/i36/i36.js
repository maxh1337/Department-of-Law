import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i36 from "../../../images/PART 2/i36.webp";

const I36 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i37");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i36} width="640px" height="542px" alt="i36" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I36;
