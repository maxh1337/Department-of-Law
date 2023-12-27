import e16o2 from "../../../../images/PART 3/Справочный материал/Кадр 16.2 спр_134.webp";
import { useNavigate } from "react-router-dom";

const Help16o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e16");
  };

  return (
    <div>
      <img src={e16o2} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help16o2;
