import e28o1 from "../../../../images/PART 3/Справочный материал/Кадр 28 спр_151.webp";
import { useNavigate } from "react-router-dom";

const Help28o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e28");
  };

  return (
    <div>
      <img src={e28o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help28o1;
