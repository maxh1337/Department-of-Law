import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i83 from "../../../images/PART 2/i83.webp";

const I83 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i84");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i83} width="640px" height="542px" alt="i83" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I83;
