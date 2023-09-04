import i39 from "../../../../images/PART 2/справочный материал/Кадр 39.1спр.png";
import { useNavigate } from "react-router-dom";

const Help39 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i39");
  };
  return (
    <div>
      <img src={i39} width="640px" height="542px" alt="i39" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help39;
