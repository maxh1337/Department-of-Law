import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i52 from "../../../images/PART 2/i52.webp";

const I52 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i53");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i52} width="640px" height="542px" alt="i52" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I52;
