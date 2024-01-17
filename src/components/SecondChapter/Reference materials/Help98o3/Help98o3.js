import i98o3 from "../../../../images/PART 2/справочный материал/Кадр 98.3спр.png";
import { useNavigate } from "react-router-dom";

const Help98o3 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i98");
  };
  return (
    <div>
      <img src={i98o3} width="640px" height="542px" alt="i98o3" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help98o3;
