import e11o2 from "../../../../images/PART 3/Справочный материал/Кадр 11.2 спр_129.webp";
import { useNavigate } from "react-router-dom";

const Help11o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e11");
  };

  return (
    <div>
      <img src={e11o2} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help11o2;
