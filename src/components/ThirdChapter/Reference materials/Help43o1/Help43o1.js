import e43o1 from "../../../../images/PART 3/Справочный материал/Кадр 43 спр_165.webp";
import { useNavigate } from "react-router-dom";

const Help43o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e43");
  };

  return (
    <div>
      <img src={e43o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help43o1;
