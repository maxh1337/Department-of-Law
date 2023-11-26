import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e20 from "../../../images/PART 3/e20.webp";

const E20 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/e21");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e20} width="640px" height="542px" alt="e20" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E20;
