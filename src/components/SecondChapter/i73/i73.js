import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i73 from "../../../images/PART 2/i73.webp";

const I73 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i74");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i73} width="640px" height="542px" alt="i73" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I73;
