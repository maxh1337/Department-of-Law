import i29o1 from "../../../../images/PART 2/справочный материал/Кадр 29.1спр.png";
import { useNavigate } from "react-router-dom";

const Help29o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i29");
  };
  return (
    <div>
      <img src={i29o1} width="640px" height="542px" alt="i29o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help29o1;
