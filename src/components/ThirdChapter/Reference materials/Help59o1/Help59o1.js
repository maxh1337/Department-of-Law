import e59o1 from "../../../../images/PART 3/Справочный материал/Кадр 59 спр_161.webp";
import { useNavigate } from "react-router-dom";

const Help59o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e59");
  };

  return (
    <div>
      <img src={e59o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help59o1;
