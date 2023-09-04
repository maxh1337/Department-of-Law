import i23o1 from "../../../../images/PART 2/справочный материал/Кадр 23спр.png";
import { useNavigate } from "react-router-dom";

const Help23 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i23");
  };
  return (
    <div>
      <img src={i23o1} width="640px" height="542px" alt="i23o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help23;
