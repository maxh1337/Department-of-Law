import i25o2 from "../../../../images/PART 2/справочный материал/Кадр 25.2спр.png";
import { useNavigate } from "react-router-dom";

const Help25o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i25");
  };
  return (
    <div>
      <img src={i25o2} width="640px" height="542px" alt="i25o2" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help25o2;
