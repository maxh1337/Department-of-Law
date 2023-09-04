import i63o3 from "../../../../images/PART 2/справочный материал/Кадр 63.3спр.png";
import { useNavigate } from "react-router-dom";

const Help63o3 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i63");
  };
  return (
    <div>
      <img src={i63o3} width="640px" height="542px" alt="i63o3" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help63o3;
