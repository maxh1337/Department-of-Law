import i66o2 from "../../../../images/PART 2/справочный материал/Кадр 66.2спр.png";
import { useNavigate } from "react-router-dom";

const Help66o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i66");
  };
  return (
    <div>
      <img src={i66o2} width="640px" height="542px" alt="i66o2" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help66o2;
