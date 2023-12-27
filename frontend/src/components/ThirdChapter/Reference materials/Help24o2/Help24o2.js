import e24o2 from "../../../../images/PART 3/Справочный материал/Кадр 24.2 спр_149.webp";
import { useNavigate } from "react-router-dom";

const Help24o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e24");
  };

  return (
    <div>
      <img src={e24o2} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help24o2;
