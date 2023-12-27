import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e61 from "../../../images/PART 3/e61.webp";

const E61 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/e62");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e61} width="640px" height="542px" alt="e61" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E61;
