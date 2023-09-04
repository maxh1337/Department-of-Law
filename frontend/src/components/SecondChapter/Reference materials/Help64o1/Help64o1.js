import i64o1 from "../../../../images/PART 2/справочный материал/Кадр 64.1спр.png";
import { useNavigate } from "react-router-dom";

const Help64o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i64");
  };
  return (
    <div>
      <img src={i64o1} width="640px" height="542px" alt="i64o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help64o1;
