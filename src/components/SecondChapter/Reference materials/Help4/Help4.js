import i4 from "../../../../images/PART 2/справочный материал/Кадр 4спр.png";
import { useNavigate } from "react-router-dom";

const Help4 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i4");
  };

  return (
    <div>
      <img src={i4} alt="15" width="640px" height="542px" alt="i4" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help4;
