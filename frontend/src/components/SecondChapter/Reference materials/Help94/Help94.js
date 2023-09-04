import i94 from "../../../../images/PART 2/справочный материал/Кадр 94спр.png";
import { useNavigate } from "react-router-dom";

const Help94 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i94");
  };
  return (
    <div>
      <img src={i94} width="640px" height="542px" alt="i94" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help94;
