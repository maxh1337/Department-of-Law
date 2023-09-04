import i7o1 from "../../../../images/PART 2/справочный материал/Кадр 7спр.png";
import { useNavigate } from "react-router-dom";

const Help7o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i7");
  };

  return (
    <div>
      <img src={i7o1} alt="15" width="640px" height="542px" alt="i7o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help7o1;
