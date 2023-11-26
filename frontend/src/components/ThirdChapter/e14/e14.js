import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e14 from "../../../images/PART 3/e14.webp";

const E14 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/e15");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e14} width="640px" height="542px" alt="e14" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E14;
