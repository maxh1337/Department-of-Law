import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i31 from "../../../images/PART 2/i31.webp";

const I31 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i32");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i31} width="640px" height="542px" alt="i31" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I31;
