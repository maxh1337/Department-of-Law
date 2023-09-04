import i55o2 from "../../../../images/PART 2/справочный материал/Кадр 55.2спр.png";
import { useNavigate } from "react-router-dom";

const Help55o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i55");
  };
  return (
    <div>
      <img src={i55o2} width="640px" height="542px" alt="i55o2" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help55o2;
