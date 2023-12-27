import e58o1 from "../../../../images/PART 3/Справочный материал/Кадр 58 спр_176.webp";
import { useNavigate } from "react-router-dom";

const Help58o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e58");
  };

  return (
    <div>
      <img src={e58o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help58o1;
