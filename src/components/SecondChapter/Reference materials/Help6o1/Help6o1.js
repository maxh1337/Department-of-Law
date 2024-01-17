import i6o1 from "../../../../images/PART 2/справочный материал/Кадр 6.1спр.png";
import { useNavigate } from "react-router-dom";

const Help6o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i6");
  };

  return (
    <div>
      <img src={i6o1} alt="15" width="640px" height="542px" alt="i6o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help6o1;
