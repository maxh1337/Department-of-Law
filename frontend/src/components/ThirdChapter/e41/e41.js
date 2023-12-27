import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e41 from "../../../images/PART 3/e41.webp";

const E41 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/e42");
  };
  return (
    <div>
      <CriminalCase />
      <img src={e41} width="640px" height="542px" alt="e41" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default E41;
