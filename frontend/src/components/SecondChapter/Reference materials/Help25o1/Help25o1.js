import i25o1 from "../../../../images/PART 2/справочный материал/Кадр 25.1спр.png";
import { useNavigate } from "react-router-dom";

const Help25o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i25");
  };
  return (
    <div>
      <img src={i25o1} width="640px" height="542px" alt="i25o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help25o1;
