import i55o1 from "../../../../images/PART 2/справочный материал/Кадр 55.1спр.png";
import { useNavigate } from "react-router-dom";

const Help55o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i55");
  };
  return (
    <div>
      <img src={i55o1} width="640px" height="542px" alt="i55o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help55o1;
