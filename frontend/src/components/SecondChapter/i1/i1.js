import { useNavigate } from "react-router-dom";
import i1 from "../../../images/PART 2/i1.webp";
import CriminalCase from "../../ui/criminal-case/criminal-case";

const I1 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i2");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i1} width="640px" height="542px" alt="i1" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default I1;
