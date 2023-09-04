import i75 from "../../../../images/PART 2/справочный материал/Кадр 75спр.png";
import { useNavigate } from "react-router-dom";

const Help75 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i75");
  };
  return (
    <div>
      <img src={i75} width="640px" height="542px" alt="i75" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help75;
