import i95 from "../../../../images/PART 2/справочный материал/Кадр 95.1спр.png";
import { useNavigate } from "react-router-dom";

const Help95o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i95");
  };
  return (
    <div>
      <img src={i95} width="640px" height="542px" alt="i95" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help95o1;
