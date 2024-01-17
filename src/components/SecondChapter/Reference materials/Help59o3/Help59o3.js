import i59o3 from "../../../../images/PART 2/справочный материал/Кадр 59.3спр.png";
import { useNavigate } from "react-router-dom";

const Help59o3 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i59");
  };
  return (
    <div>
      <img src={i59o3} width="640px" height="542px" alt="i59o3" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help59o3;
