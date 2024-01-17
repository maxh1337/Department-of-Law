import i53o2 from "../../../../images/PART 2/справочный материал/Кадр 53.2спр.png";
import { useNavigate } from "react-router-dom";

const Help53o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i53");
  };
  return (
    <div>
      <img src={i53o2} width="640px" height="542px" alt="i53o2" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help53o2;
