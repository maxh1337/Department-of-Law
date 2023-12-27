import e48o1 from "../../../../images/PART 3/Справочный материал/Кадр 48 спр_167.webp";
import { useNavigate } from "react-router-dom";

const Help48o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e48");
  };

  return (
    <div>
      <img src={e48o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help48o1;
