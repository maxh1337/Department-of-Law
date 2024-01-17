import i35o3 from "../../../../images/PART 2/справочный материал/Кадр 35.3спр.png";
import { useNavigate } from "react-router-dom";

const Help35o3 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i35");
  };
  return (
    <div>
      <img src={i35o3} width="640px" height="542px" alt="i35o3" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help35o3;
