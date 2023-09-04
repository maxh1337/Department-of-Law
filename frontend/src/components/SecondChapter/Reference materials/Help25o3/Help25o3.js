import i25o3 from "../../../../images/PART 2/справочный материал/Кадр 25.3спр.png";
import { useNavigate } from "react-router-dom";

const Help25o3 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i25");
  };
  return (
    <div>
      <img src={i25o3} width="640px" height="542px" alt="i25o3" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help25o3;
