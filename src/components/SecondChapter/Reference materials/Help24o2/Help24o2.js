import i24o2 from "../../../../images/PART 2/справочный материал/Кадр 24.2спр.png";
import { useNavigate } from "react-router-dom";

const Help24o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i24");
  };
  return (
    <div>
      <img src={i24o2} width="640px" height="542px" alt="i24o2" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help24o2;
