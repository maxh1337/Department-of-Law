import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e5 from "../../../images/PART 3/e5.webp";

const E5 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/e6");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e5} width="640px" height="542px" alt="e5" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E5;
