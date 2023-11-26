import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e10 from "../../../images/PART 3/e10.webp";

const E10 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/e11");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e10} width="640px" height="542px" alt="e10" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E10;
