import i59o1 from "../../../../images/PART 2/справочный материал/Кадр 59.1спр.png";
import { useNavigate } from "react-router-dom";

const Help59o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i59");
  };
  return (
    <div>
      <img src={i59o1} width="640px" height="542px" alt="i59o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help59o1;
