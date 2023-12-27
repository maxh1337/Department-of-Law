import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e49 from "../../../images/PART 3/e49.webp";

const E49 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/e49-1");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e49} width="640px" height="542px" alt="e49" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E49;
