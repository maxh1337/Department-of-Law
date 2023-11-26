import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e9 from "../../../images/PART 3/e9.webp";

const E9 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/e10");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e9} width="640px" height="542px" alt="e9" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E9;
