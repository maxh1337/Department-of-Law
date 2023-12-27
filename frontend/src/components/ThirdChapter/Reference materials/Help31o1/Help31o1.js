import e31o1 from "../../../../images/PART 3/Справочный материал/Кадр 31.1 спр_153.webp";
import { useNavigate } from "react-router-dom";

const Help31o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e31");
  };

  return (
    <div>
      <img src={e31o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help31o1;
