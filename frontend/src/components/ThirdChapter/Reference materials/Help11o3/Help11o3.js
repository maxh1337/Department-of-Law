import e11o3 from "../../../../images/PART 3/Справочный материал/Кадр 11.3 спр_130.webp";
import { useNavigate } from "react-router-dom";

const Help11o3 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e11");
  };

  return (
    <div>
      <img src={e11o3} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help11o3;
