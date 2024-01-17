import e6o1 from "../../../../images/PART 3/Справочный материал/Кадр 6.1 спр_142.webp";
import { useNavigate } from "react-router-dom";

const Help6o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e6");
  };

  return (
    <div>
      <img src={e6o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help6o1;
