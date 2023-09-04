import i28o2 from "../../../../images/PART 2/справочный материал/Кадр 28.2спр.png";
import { useNavigate } from "react-router-dom";

const Help28o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i28");
  };
  return (
    <div>
      <img src={i28o2} width="640px" height="542px" alt="i28o2" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help28o2;
