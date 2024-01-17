import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e32 from "../../../images/PART 3/e32.webp";

const E32 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/e33");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e32} width="640px" height="542px" alt="e32" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E32;
