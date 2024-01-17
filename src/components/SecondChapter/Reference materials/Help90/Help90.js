import i90 from "../../../../images/PART 2/справочный материал/Кадр 90спр.png";
import { useNavigate } from "react-router-dom";

const Help90 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i90");
  };
  return (
    <div>
      <img src={i90} width="640px" height="542px" alt="i90" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help90;
