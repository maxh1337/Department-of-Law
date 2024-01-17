import e35o2 from "../../../../images/PART 3/Справочный материал/Кадр 35.2 спр_157.webp";
import { useNavigate } from "react-router-dom";

const Help35o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e35");
  };

  return (
    <div>
      <img src={e35o2} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help35o2;
