import i84o1 from "../../../../images/PART 2/справочный материал/Кадр 84.1спр.png";
import { useNavigate } from "react-router-dom";

const Help84o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i84");
  };
  return (
    <div>
      <img src={i84o1} width="640px" height="542px" alt="i84o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help84o1;
