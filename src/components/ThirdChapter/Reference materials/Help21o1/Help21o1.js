import e21o1 from "../../../../images/PART 3/Справочный материал/Кадр 21 спр_137.webp";
import { useNavigate } from "react-router-dom";

const Help21o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e21");
  };

  return (
    <div>
      <img src={e21o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help21o1;
