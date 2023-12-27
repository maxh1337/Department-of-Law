import e18o1 from "../../../../images/PART 3/Справочный материал/Кадр 18 спр_135.webp";
import { useNavigate } from "react-router-dom";

const Help18o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e18");
  };

  return (
    <div>
      <img src={e18o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help18o1;
