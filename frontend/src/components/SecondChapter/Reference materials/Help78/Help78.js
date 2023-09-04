import i78 from "../../../../images/PART 2/справочный материал/Кадр 78спр.png";
import { useNavigate } from "react-router-dom";

const Help78 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i78");
  };
  return (
    <div>
      <img src={i78} width="640px" height="542px" alt="i78" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help78;
