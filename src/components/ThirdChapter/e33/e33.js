import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e33 from "../../../images/PART 3/e33.webp";

const E33 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/e34");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e33} width="640px" height="542px" alt="e33" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E33;
