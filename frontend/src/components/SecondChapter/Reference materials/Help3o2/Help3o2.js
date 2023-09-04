import i3o2 from "../../../../images/PART 2/справочный материал/Кадр 3.2спр.png";
import { useNavigate } from "react-router-dom";

const Help3o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i3");
  };

  return (
    <div>
      <img src={i3o2} alt="15" width="640px" height="542px" alt="i3o2" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help3o2;
