import { useNavigate } from "react-router-dom";
import i2 from "../../../images/PART 2/i2.webp";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import p6read from "../../../images/buttons/exclamation.webp";

const I2 = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/i2doc");
  };

  return (
    <div>
      <CriminalCase />
      <a>
        <img
          alt="Читать заявление"
          id="i2-exclamation"
          src={p6read}
          onClick={nextPage}
        />
      </a>
      <img src={i2} width="640px" height="542px" alt="i2" />
    </div>
  );
};

export default I2;
