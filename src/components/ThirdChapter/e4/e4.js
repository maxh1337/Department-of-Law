import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e4 from "../../../images/PART 3/e4.webp";

const E4 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/e5");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e4} width="640px" height="542px" alt="e4" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E4;
