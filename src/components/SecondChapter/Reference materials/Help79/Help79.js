import i79 from "../../../../images/PART 2/справочный материал/Кадр 79спр.png";
import { useNavigate } from "react-router-dom";

const Help79 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i79");
  };
  return (
    <div>
      <img src={i79} width="640px" height="542px" alt="i79" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help79;
