import CriminalCase from "../../ui/criminal-case/criminal-case";
import e1 from "../../../images/PART 3/e1.webp";
import { useNavigate } from "react-router-dom";

const E1 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/e2");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e1} width="640px" height="542px" alt="e1" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E1;
