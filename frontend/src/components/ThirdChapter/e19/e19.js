import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e19 from "../../../images/PART 3/e19.webp";

const E19 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/e19-1");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e19} width="640px" height="542px" alt="e19" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E19;
