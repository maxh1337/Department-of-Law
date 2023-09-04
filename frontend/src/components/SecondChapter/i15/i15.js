import CriminalCase from "../../ui/criminal-case/criminal-case";
import i15 from "../../../images/PART 2/i15.jpg";
import { useNavigate } from "react-router-dom";

const I15 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i16");
  };
  return (
    <div>
      <CriminalCase />
      <img src={i15} width="640px" height="542px" alt="i15" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default I15;
