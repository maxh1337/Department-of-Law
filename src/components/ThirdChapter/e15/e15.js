import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e15 from "../../../images/PART 3/e15.webp";

const E15 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/e16");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e15} width="640px" height="542px" alt="e15" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E15;
