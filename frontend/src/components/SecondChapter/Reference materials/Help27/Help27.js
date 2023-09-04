import i27 from "../../../../images/PART 2/справочный материал/Кадр 27.1спр.png";
import { useNavigate } from "react-router-dom";

const Help27 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i27");
  };
  return (
    <div>
      <img src={i27} width="640px" height="542px" alt="i27" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help27;
