import i86 from "../../../../images/PART 2/справочный материал/Кадр 86спр.png";
import { useNavigate } from "react-router-dom";

const Help86 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i86");
  };
  return (
    <div>
      <img src={i86} width="640px" height="542px" alt="i86" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help86;
