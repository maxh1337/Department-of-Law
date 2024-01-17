import i60o1 from "../../../../images/PART 2/справочный материал/Кадр 60.1спр.png";
import { useNavigate } from "react-router-dom";

const Help60o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i60");
  };
  return (
    <div>
      <img src={i60o1} width="640px" height="542px" alt="i60o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help60o1;
