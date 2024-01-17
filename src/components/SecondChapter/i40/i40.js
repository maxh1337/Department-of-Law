import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i40 from "../../../images/PART 2/i40.webp";

const I40 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i41");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i40} width="640px" height="542px" alt="i40" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default I40;
