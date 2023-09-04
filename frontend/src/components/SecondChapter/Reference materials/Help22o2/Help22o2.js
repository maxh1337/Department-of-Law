import i22o2 from "../../../../images/PART 2/справочный материал/Кадр 22.2спр.png";
import { useNavigate } from "react-router-dom";

const Help22o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i22");
  };
  return (
    <div>
      <img src={i22o2} width="640px" height="542px" alt="i22o2" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help22o2;
