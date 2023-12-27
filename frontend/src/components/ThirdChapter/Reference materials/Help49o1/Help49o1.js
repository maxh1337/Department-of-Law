import e49o1 from "../../../../images/PART 3/Справочный материал/Кадр 49.1 спр_168.webp";
import { useNavigate } from "react-router-dom";

const Help49o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e49");
  };

  return (
    <div>
      <img src={e49o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help49o1;
