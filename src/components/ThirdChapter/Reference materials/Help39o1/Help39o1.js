import e39o1 from "../../../../images/PART 3/Справочный материал/Кадр 39.1 спр_160.webp";
import { useNavigate } from "react-router-dom";

const Help39o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e39");
  };

  return (
    <div>
      <img src={e39o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help39o1;
