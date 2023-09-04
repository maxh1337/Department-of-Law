import i63o1 from "../../../../images/PART 2/справочный материал/Кадр 63.1спр.png";
import { useNavigate } from "react-router-dom";

const Help63o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i63");
  };
  return (
    <div>
      <img src={i63o1} width="640px" height="542px" alt="i63o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help63o1;
