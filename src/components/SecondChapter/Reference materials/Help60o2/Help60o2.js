import i60o2 from "../../../../images/PART 2/справочный материал/Кадр 60.2спр.png";
import { useNavigate } from "react-router-dom";

const Help60o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i60");
  };
  return (
    <div>
      <img src={i60o2} width="640px" height="542px" alt="i60o2" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help60o2;
