import i24o3 from "../../../../images/PART 2/справочный материал/Кадр 24.3спр.png";
import { useNavigate } from "react-router-dom";

const Help24o3 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i24");
  };
  return (
    <div>
      <img src={i24o3} width="640px" height="542px" alt="i24o3" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help24o3;
