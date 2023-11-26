import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e12 from "../../../images/PART 3/e12.webp";

const E12 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/e13");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e12} width="640px" height="542px" alt="e12" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E12;
