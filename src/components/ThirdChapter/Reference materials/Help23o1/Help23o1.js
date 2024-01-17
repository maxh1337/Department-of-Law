import e23o1 from "../../../../images/PART 3/Справочный материал/Кадр 23 спр_147.webp";
import { useNavigate } from "react-router-dom";

const Help23o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e23");
  };

  return (
    <div>
      <img src={e23o1} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help23o1;
