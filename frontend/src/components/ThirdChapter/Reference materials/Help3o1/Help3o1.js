import e3o1 from "../../../../images/PART 3/Справочный материал/Кадр 3 спр_141.webp";
import { useNavigate } from "react-router-dom";

const Help3o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e3");
  };

  return (
    <div>
      <img src={e3o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help3o1;
