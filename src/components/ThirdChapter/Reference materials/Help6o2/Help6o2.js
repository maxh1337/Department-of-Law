import e6o2 from "../../../../images/PART 3/Справочный материал/Кадр 6.2 спр_143.webp";
import { useNavigate } from "react-router-dom";

const Help6o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e6");
  };

  return (
    <div>
      <img src={e6o2} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help6o2;
