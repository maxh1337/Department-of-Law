import e39o2 from "../../../../images/PART 3/Справочный материал/Кадр 39.2 спр_145.webp";
import { useNavigate } from "react-router-dom";

const Help39o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e39");
  };

  return (
    <div>
      <img src={e39o2} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help39o2;
