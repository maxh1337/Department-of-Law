import i12o2 from "../../../../images/PART 2/справочный материал/Кадр 12.2спр.png";
import { useNavigate } from "react-router-dom";

const Help12o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i12");
  };

  return (
    <div>
      <img src={i12o2} alt="15" width="640px" height="542px" alt="i12o2" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help12o2;
