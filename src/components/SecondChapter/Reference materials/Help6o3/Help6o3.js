import i6o3 from "../../../../images/PART 2/справочный материал/Кадр 6.3спр.png";
import { useNavigate } from "react-router-dom";

const Help6o3 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i6");
  };

  return (
    <div>
      <img src={i6o3} alt="15" width="640px" height="542px" alt="i6o3" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help6o3;
