import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i88 from "../../../images/PART 2/i88.webp";

const I88 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i89");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i88} width="640px" height="542px" alt="i88" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I88;
