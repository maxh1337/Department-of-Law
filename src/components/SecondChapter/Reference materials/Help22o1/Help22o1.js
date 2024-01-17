import i22o1 from "../../../../images/PART 2/справочный материал/Кадр 22.1спр.png";
import { useNavigate } from "react-router-dom";

const Help22o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i22");
  };
  return (
    <div>
      <img src={i22o1} width="640px" height="542px" alt="i22o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help22o1;
