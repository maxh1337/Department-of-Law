import i6o2 from "../../../../images/PART 2/справочный материал/Кадр 6.2спр.png";
import { useNavigate } from "react-router-dom";

const Help6o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i6");
  };

  return (
    <div>
      <img src={i6o2} alt="15" width="640px" height="542px" alt="i6o2" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help6o2;
