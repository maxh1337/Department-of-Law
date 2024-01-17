import i49o1 from "../../../../images/PART 2/справочный материал/Кадр 49.1спр.png";
import { useNavigate } from "react-router-dom";

const Help49o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i49");
  };
  return (
    <div>
      <img src={i49o1} width="640px" height="542px" alt="i49o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help49o1;
