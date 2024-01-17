import i68 from "../../../../images/PART 2/справочный материал/Кадр 68спр.png";
import { useNavigate } from "react-router-dom";

const Help68 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i68");
  };
  return (
    <div>
      <img src={i68} width="640px" height="542px" alt="i68" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help68;
