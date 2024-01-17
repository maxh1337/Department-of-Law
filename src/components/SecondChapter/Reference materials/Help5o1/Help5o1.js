import i5o1 from "../../../../images/PART 2/справочный материал/Кадр 5.1спр.png";
import { useNavigate } from "react-router-dom";

const Help5o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i5");
  };

  return (
    <div>
      <img src={i5o1} alt="15" width="640px" height="542px" alt="i5o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help5o1;
