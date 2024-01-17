import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e50 from "../../../images/PART 3/e50.webp";

const E50 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/e51");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e50} width="640px" height="542px" alt="e50" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E50;
