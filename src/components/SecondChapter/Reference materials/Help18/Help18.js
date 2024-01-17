import i18 from "../../../../images/PART 2/справочный материал/Кадр 18спр.png";
import { useNavigate } from "react-router-dom";

const Help18 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i18");
  };

  return (
    <div>
      <img src={i18} width="640px" height="542px" alt="i18" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help18;
