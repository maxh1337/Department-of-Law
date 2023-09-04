import i77o1 from "../../../../images/PART 2/справочный материал/Кадр 77.1спр.png";
import { useNavigate } from "react-router-dom";

const Help77o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i77");
  };
  return (
    <div>
      <img src={i77o1} width="640px" height="542px" alt="i77o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help77o1;
