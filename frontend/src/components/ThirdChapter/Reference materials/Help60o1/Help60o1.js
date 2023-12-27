import e60o1 from "../../../../images/PART 3/Справочный материал/Кадр 60.1 спр_162.webp";
import { useNavigate } from "react-router-dom";

const Help60o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e60");
  };

  return (
    <div>
      <img src={e60o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help60o1;
