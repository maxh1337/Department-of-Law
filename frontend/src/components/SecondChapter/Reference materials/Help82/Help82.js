import i82 from "../../../../images/PART 2/справочный материал/Кадр 82спр.png";
import { useNavigate } from "react-router-dom";

const Help82 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i82");
  };
  return (
    <div>
      <img src={i82} width="640px" height="542px" alt="i82" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help82;
