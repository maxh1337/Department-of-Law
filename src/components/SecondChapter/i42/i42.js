import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i42 from "../../../images/PART 2/i42.webp";

const I42 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i43");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i42} width="640px" height="542px" alt="i42" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I42;
