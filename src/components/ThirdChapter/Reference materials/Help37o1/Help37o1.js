import e37o1 from "../../../../images/PART 3/Справочный материал/Кадр 37 спр_158.webp";
import { useNavigate } from "react-router-dom";

const Help37o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e37");
  };

  return (
    <div>
      <img src={e37o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help37o1;
