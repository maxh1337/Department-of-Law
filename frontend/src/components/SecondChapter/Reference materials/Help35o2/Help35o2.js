import i35o2 from "../../../../images/PART 2/справочный материал/Кадр 35.2спр.png";
import { useNavigate } from "react-router-dom";

const Help35o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i35");
  };
  return (
    <div>
      <img src={i35o2} width="640px" height="542px" alt="i35o2" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help35o2;
