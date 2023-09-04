import i17o1 from "../../../../images/PART 2/справочный материал/Кадр 17.1спр.png";
import { useNavigate } from "react-router-dom";

const Help17o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i17");
  };

  return (
    <div>
      <img src={i17o1} width="640px" height="542px" alt="i17o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help17o1;
