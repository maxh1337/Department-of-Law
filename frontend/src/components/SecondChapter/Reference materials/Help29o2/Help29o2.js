import i29o2 from "../../../../images/PART 2/справочный материал/Кадр 29.2спр.png";
import { useNavigate } from "react-router-dom";

const Help29o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i29");
  };
  return (
    <div>
      <img src={i29o2} width="640px" height="542px" alt="i29o2" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help29o2;
