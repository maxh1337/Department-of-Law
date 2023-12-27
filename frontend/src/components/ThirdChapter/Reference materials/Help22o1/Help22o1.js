import e22o1 from "../../../../images/PART 3/Справочный материал/Кадр 22 спр_138.webp";
import { useNavigate } from "react-router-dom";

const Help22o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e22");
  };

  return (
    <div>
      <img src={e22o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help22o1;
