import i53o1 from "../../../../images/PART 2/справочный материал/Кадр 53.1спр.png";
import { useNavigate } from "react-router-dom";

const Help53o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i53");
  };
  return (
    <div>
      <img src={i53o1} width="640px" height="542px" alt="i53o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help53o1;
