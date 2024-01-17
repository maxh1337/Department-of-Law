import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i32 from "../../../images/PART 2/i32.webp";

const I32 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i33");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i32} width="640px" height="542px" alt="i32" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I32;
