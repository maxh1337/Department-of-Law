import i54 from "../../../../images/PART 2/справочный материал/Кадр 54спр.png";
import { useNavigate } from "react-router-dom";

const Help54 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i54");
  };
  return (
    <div>
      <img src={i54} width="640px" height="542px" alt="i54" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help54;
