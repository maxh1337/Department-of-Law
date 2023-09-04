import i14 from "../../../../images/PART 2/справочный материал/Кадр 14спр.png";
import { useNavigate } from "react-router-dom";

const Help14 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i14");
  };

  return (
    <div>
      <img src={i14} width="640px" height="542px" alt="i14" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help14;
