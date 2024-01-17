import i71 from "../../../../images/PART 2/справочный материал/Кадр 71спр.png";
import { useNavigate } from "react-router-dom";

const Help71 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i71");
  };
  return (
    <div>
      <img src={i71} width="640px" height="542px" alt="i71" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help71;
