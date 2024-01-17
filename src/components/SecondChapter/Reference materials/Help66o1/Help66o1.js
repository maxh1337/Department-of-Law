import i66o1 from "../../../../images/PART 2/справочный материал/Кадр 66.1спр.png";
import { useNavigate } from "react-router-dom";

const Help66o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i66");
  };
  return (
    <div>
      <img src={i66o1} width="640px" height="542px" alt="i66o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help66o1;
