import e56o1 from "../../../../images/PART 3/Справочный материал/Кадр 56 спр_172.webp";
import { useNavigate } from "react-router-dom";

const Help56o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e56");
  };

  return (
    <div>
      <img src={e56o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help56o1;
