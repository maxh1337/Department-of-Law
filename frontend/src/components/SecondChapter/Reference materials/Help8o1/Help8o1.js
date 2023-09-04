import i8o1 from "../../../../images/PART 2/справочный материал/Кадр 8 спр.png";
import { useNavigate } from "react-router-dom";

const Help8o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i8");
  };

  return (
    <div>
      <img src={i8o1} alt="15" width="640px" height="542px" alt="i8o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help8o1;
