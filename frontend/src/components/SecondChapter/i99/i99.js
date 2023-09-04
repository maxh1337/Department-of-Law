import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i99 from "../../../images/PART 2/i99 good.webp";

const I99 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i99} width="640px" height="542px" alt="i99" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I99;
