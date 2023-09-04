import i5o3 from "../../../../images/PART 2/справочный материал/Кадр 5.3спр.png";
import { useNavigate } from "react-router-dom";

const Help5o3 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i5");
  };

  return (
    <div>
      <img src={i5o3} alt="15" width="640px" height="542px" alt="i5o3" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help5o3;
