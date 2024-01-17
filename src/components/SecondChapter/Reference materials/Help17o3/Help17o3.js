import i17o3 from "../../../../images/PART 2/справочный материал/Кадр 17.3спр.png";
import { useNavigate } from "react-router-dom";

const Help17o3 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i17");
  };

  return (
    <div>
      <img src={i17o3} width="640px" height="542px" alt="i17o3" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help17o3;
