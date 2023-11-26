import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e8 from "../../../images/PART 3/e8.webp";

const E8 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/e9");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e8} width="640px" height="542px" alt="e8" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E8;
