import i84o2 from "../../../../images/PART 2/справочный материал/Кадр 84.2спр.png";
import { useNavigate } from "react-router-dom";

const Help84o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i84");
  };
  return (
    <div>
      <img src={i84o2} width="640px" height="542px" alt="i84o2" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help84o2;
