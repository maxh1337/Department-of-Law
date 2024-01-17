import i74 from "../../../../images/PART 2/справочный материал/Кадр 74спр.png";
import { useNavigate } from "react-router-dom";

const Help74 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i74");
  };
  return (
    <div>
      <img src={i74} width="640px" height="542px" alt="i74" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help74;
