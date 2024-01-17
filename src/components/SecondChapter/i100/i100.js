import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i100 from "../../../images/PART 2/i100 bad.webp";

const I100 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i100} width="640px" height="542px" alt="i100" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I100;
