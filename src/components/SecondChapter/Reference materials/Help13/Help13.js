import i13 from "../../../../images/PART 2/справочный материал/Кадр 13спр.png";
import { useNavigate } from "react-router-dom";

const Help13 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i13");
  };

  return (
    <div>
      <img src={i13} alt="15" width="640px" height="542px" alt="i13" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help13;
