import e11o1 from "../../../../images/PART 3/Справочный материал/Кадр 11.1 спр_144.webp";
import { useNavigate } from "react-router-dom";

const Help11o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e11");
  };

  return (
    <div>
      <img src={e11o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help11o1;
