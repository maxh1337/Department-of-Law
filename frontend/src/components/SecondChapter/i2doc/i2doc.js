import { useNavigate } from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import i2 from "../../../images/PART 2/2doc.webp";

const I2Doc = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i3");
  };

  return (
    <div>
      <CriminalCase />
      <img src={i2} width="640px" height="542px" alt="i2" />
      <div className="Buttons">
        <button className="linkButton" onClick={nextPage}>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default I2Doc;
