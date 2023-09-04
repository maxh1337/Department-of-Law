import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i43 from "../../../images/PART 2/i43.webp";

const I43 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i44");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i43} width="640px" height="542px" alt="i43" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I43;
