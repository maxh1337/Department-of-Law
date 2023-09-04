import i10 from "../../../images/PART 2/i10.webp";
import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";

const I10 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i11");
  };
  return (
    <div>
      <CriminalCase />
      <img src={i10} width="640px" height="542px" alt="i10" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I10;
