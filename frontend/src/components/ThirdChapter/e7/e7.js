import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e7 from "../../../images/PART 3/e7.webp";

const E7 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/e8");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e7} width="640px" height="542px" alt="e7" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E7;
