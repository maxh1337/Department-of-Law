import i49o2 from "../../../../images/PART 2/справочный материал/Кадр 49.2спр.png";
import { useNavigate } from "react-router-dom";

const Help49o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i49");
  };
  return (
    <div>
      <img src={i49o2} width="640px" height="542px" alt="i49o2" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help49o2;
