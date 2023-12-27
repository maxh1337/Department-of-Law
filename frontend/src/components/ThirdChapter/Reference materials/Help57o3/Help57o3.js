import e57o3 from "../../../../images/PART 3/Справочный материал/Кадр 57.3 спр_175.webp";
import { useNavigate } from "react-router-dom";

const Help57o3 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e57");
  };

  return (
    <div>
      <img src={e57o3} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help57o3;
