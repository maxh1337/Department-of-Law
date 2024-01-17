import i51 from "../../../../images/PART 2/справочный материал/Кадр 51спр.png";
import { useNavigate } from "react-router-dom";

const Help51 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i51");
  };
  return (
    <div>
      <img src={i51} width="640px" height="542px" alt="i51" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help51;
