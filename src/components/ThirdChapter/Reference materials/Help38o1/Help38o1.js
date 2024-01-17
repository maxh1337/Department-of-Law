import e38o1 from "../../../../images/PART 3/Справочный материал/Кадр 38 спр_159.webp";
import { useNavigate } from "react-router-dom";

const Help38o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e38");
  };

  return (
    <div>
      <img src={e38o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help38o1;
