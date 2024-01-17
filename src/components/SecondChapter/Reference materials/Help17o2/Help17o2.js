import i17o2 from "../../../../images/PART 2/справочный материал/Кадр 17.2спр.png";
import { useNavigate } from "react-router-dom";

const Help17o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i17");
  };

  return (
    <div>
      <img src={i17o2} width="640px" height="542px" alt="i17o2" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help17o2;
